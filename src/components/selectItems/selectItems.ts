import { Component, Prop, Vue } from "vue-property-decorator";
import { Button, Radio } from "ant-design-vue";

@Component
export default class SelectItems extends Vue {
  @Prop() private msg!: string;

  data() {
    return {
      value: 1,
      radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px"
      }
    };
  }

  methods() {}
}
