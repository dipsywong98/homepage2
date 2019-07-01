<template lang="pug">
  .card
    .container
      .my-work
        h1 My Works
      .line-arrow
      .line
      .works-container
        .work(v-for="work in works")
          .work-content
            .bubble
              .bubble-content
                h3 {{work.title}}
                p {{work.brief}}
                div {{work.cover}}
                div
                  span(v-for="tag in work.tags") {{tag}}
          .line-circle
          .work-time
            .bubble
              .bubble-content {{work.startTime}}
              .arrow.left

</template>
<script>
export default {
  data() {
    return {
      works: [
        {
          title: "My project 1",
          brief: "My description",
          cover: "some url",
          tags: ["tag1"],
          startTime: "some time in ISO",
          endTime: "some time in ISO"
        },
        {
          title: "My project 2",
          brief: "My description",
          cover: "some url",
          tags: ["tag1"],
          startTime: "some time in ISO",
          endTime: "some time in ISO"
        },
        {
          title: "My project 2",
          brief: "My description",
          cover: "some url",
          tags: ["tag1"],
          startTime: "some time in ISO",
          endTime: "some time in ISO"
        },
        {
          title: "My project 2",
          brief: "My description",
          cover: "some url",
          tags: ["tag1"],
          startTime: "some time in ISO",
          endTime: "some time in ISO"
        },
        {
          title: "My project 2",
          brief: "My description",
          cover: "some url",
          tags: ["tag1"],
          startTime: "some time in ISO",
          endTime: "some time in ISO"
        },
        {
          title: "My project 2",
          brief: "My description",
          cover: "some url",
          tags: ["tag1"],
          startTime: "some time in ISO",
          endTime: "some time in ISO"
        },
        {
          title: "My project 2",
          brief: "My description",
          cover: "some url",
          tags: ["tag1"],
          startTime: "some time in ISO",
          endTime: "some time in ISO"
        },
        {
          title: "My project 2",
          brief: "My description",
          cover: "some url",
          tags: ["tag1"],
          startTime: "some time in ISO",
          endTime: "some time in ISO"
        },
        {
          title: "My project 2",
          brief: "My description",
          cover: "some url",
          tags: ["tag1"],
          startTime: "some time in ISO",
          endTime: "some time in ISO"
        },
        {
          title: "My project 2",
          brief: "My description",
          cover: "some url",
          tags: ["tag1"],
          startTime: "some time in ISO",
          endTime: "some time in ISO"
        },
        {
          title: "My project 2",
          brief: "My description",
          cover: "some url",
          tags: ["tag1"],
          startTime: "some time in ISO",
          endTime: "some time in ISO"
        },
        {
          title: "My project 2",
          brief: "My description",
          cover: "some url",
          tags: ["tag1"],
          startTime: "some time in ISO",
          endTime: "some time in ISO"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  background-color: #f8f8f8;
  max-width: 1200px;
  margin: 10rem auto;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    margin: 10rem 0;
  }
}
.container {
  margin: 5rem;
  position: relative;
}
.my-work {
  text-align: left;
}
.line {
  background-color: var(--blue);
  width: var(--line-width);
  height: 100%;
  position: absolute;
  top: 61.44px;
  left: calc(50% - var(--line-width) / 2);
}
.line-arrow {
  position: absolute;
  left: calc(50% - var(--line-width));
  top: calc(61.44px - var(--line-width));
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 var(--line-width) var(--line-width) var(--line-width);
  border-color: transparent transparent var(--blue) transparent;
}
.works-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.work {
  text-align: left;
  display: flex;
  align-items: center;
}
.work-content {
  width: calc(50% - var(--line-width) / 2 - 2px);
}
.work-time {
  width: calc(50% - var(--line-width) / 2 - 2px);
  font-weight: bold;
}
.line-circle {
  width: var(--line-width);
  height: var(--line-width);
  border-radius: calc(var(--line-width) / 2);
  border: black solid 2px;
  z-index: 1;
  background-color: white;
}
.bubble {
  position: relative;
  margin: var(--line-width);
  border: black solid 1px;
  border-radius: 10px;
  background-color: var(--bubble-color);
}
.bubble-content {
  margin: var(--line-width);
}
.arrow {
  width: calc(var(--line-width));
  height: calc(var(--line-width));
  transform: rotateZ(45deg);
  background-color: var(--bubble-color);
  position: absolute;
  top: calc(50% - var(--line-width) / 2);
  &.left {
    left: calc(-1 * var(--line-width) / 2);
    border-left: solid 1px;
    border-bottom: solid 1px;
  }
}
</style>
