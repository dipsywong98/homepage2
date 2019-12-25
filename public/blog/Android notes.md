# Android notes

### Use XML as layout

activity setContentView
others use `inflator`

### Assess the elements (AKA view) in code

use `<context>.findViewById(R.id.<the_id>)`

### Toast

```JAVA
private void makeToast(String string){
  Toast.makeText(this,string,Toast.LENGTH_SHORT).show();
}
```

### Toolbar and Action bar

```JAVA
Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
setSupportActionBar(toolbar);

//show back arror
getSupportActionBar().setDisplayHomeAsUpEnabled(true);
getSupportActionBar().setDisplayShowHomeEnabled(true);
```

```XML
<android.support.design.widget.AppBarLayout
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:theme="@style/AppTheme.AppBarOverlay">

    <android.support.v7.widget.Toolbar
        android:id="@+id/toolbar"
        android:layout_width="match_parent"
        android:layout_height="?attr/actionBarSize"
        android:background="?attr/colorPrimary"
        app:popupTheme="@style/AppTheme.PopupOverlay" />

</android.support.design.widget.AppBarLayout>
```

### Multi Window

#### Intent and Activity

```JAVA
//start a system activity of camera, and action have id 1
private void startCam(){
  Intent intent = new Intent("android.media.action.IMAGE_CAPTURE");
  startActivityForResult(intent, 1);
}

//response when activity end
protected void onActivityResult(int requestCode, int resultCode, Intent data) {
  //1 is corresponding to camera activity
  if (requestCode == 1) {
    if(resultCode == RESULT_OK){
      Intent intent = new Intent(MainActivity.this,ProcessActivity.class);//this is calling other activity
      startActivityForResult(intent,2);
    }
    else if(resultCode == RESULT_CANCELED){
      Toast.makeText(this,"cancelled",Toast.LENGTH_SHORT).show();
    }
  }
  if(requestCode == 2){
    Toast.makeText(this,"hello",Toast.LENGTH_SHORT).show();
  }
}
```

To make other activity, you need xml, class and set the manifest

#### Fragment and Dialog

```JAVA
public class ScanDialog extends DialogFragment {

    public interface NoticeDialogListener {
        public void onDialogPositiveClick(DialogFragment dialog);
        public void onDialogNegativeClick(DialogFragment dialog);
    }

    NoticeDialogListener mListener;

    @Override
    public void onAttach(Activity activity) {
        super.onAttach(activity);
        // Verify that the host activity implements the callback interface
        try {
            // Instantiate the NoticeDialogListener so we can send events to the host
            mListener = (NoticeDialogListener) activity;
        } catch (ClassCastException e) {
            // The activity doesn't implement the interface, throw exception
            throw new ClassCastException(activity.toString()
                    + " must implement NoticeDialogListener");
        }
    }

    @Override
    public Dialog onCreateDialog(Bundle savedInstanceState) {
        // Use the Builder class for convenient dialog construction
        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
        LayoutInflater inflater = getActivity().getLayoutInflater();
        builder.setView(inflater.inflate(R.layout.dialog_scan_detail, null))
                .setPositiveButton("OK", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                        // FIRE ZE MISSILES!
                        mListener.onDialogPositiveClick(ScanDialog.this);
                    }
                })
                .setNegativeButton("CANCEL", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                        // User cancelled the dialog
                        mListener.onDialogNegativeClick(ScanDialog.this);
                        ScanDialog.this.getDialog().cancel();
                    }
                });
        // Create the AlertDialog object and return it
        return builder.create();
    }
}
```

```JAVA
public class MainActivity extends AppCompatActivity implements ScanDialog.NoticeDialogListener{
  //other stuffs
  //...
  //in main activity
  private void inputAlertShow(){
    DialogFragment dialog = new ScanDialog();
    dialog.show(getSupportFragmentManager(), "ScanDialog");
  }
  @Override
  public void onDialogPositiveClick(DialogFragment dialog) {
    TextView tv = (TextView) dialog.getDialog().findViewById(R.id.scan_name);
    m_Text = tv.getText().toString();
    tv = (TextView) dialog.getDialog().findViewById(R.id.scan_description);
    m_Description = tv.getText().toString();
    if(m_Description.matches(""))m_Description=" ";
    if(m_Text.matches("")){
      makeToast("Scan name cannot be empty");
      inputAlertShow();
    }else{
      startCam();
    }
  }

  @Override
  public void onDialogNegativeClick(DialogFragment dialog) {

  }
}
```

### Recycler View

best tutorial I have ever found: https://medium.com/@evanhou/%E6%B7%BA%E8%AB%87android-recyclerview-375f9c0eea58

**recycled root's height need to be wrap content**

### Include Image

normal image : drag and drop to drawable folder using OS's file explorer

icon: right click res folder, add image asset, add action bar icon choose it