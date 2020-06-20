<template src="./selectItems.html"></template>
<script>
import Table from "../table/table";
import HomeMixin from "../../core/store/home/store/mixin";

const columns = [
  {
    dataIndex: "sizeSelected.label",
    key: "sizeSelected",
    title: "Tamanho"
  },
  {
    title: "Sabor",
    dataIndex: "flavorSelected.label",
    key: "flavorSelected"
  },
  {
    title: "Personalização",
    dataIndex: "customization",
    key: "customization"
  },
  {
    title: "Tempo de preparo (em minutos)",
    key: "time",
    dataIndex: "time"
  },
  {
    title: "Valor total",
    key: "total",
    dataIndex: "total"
  },
  {
    title: "Ação",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

export default {
  name: "Home",
  mixins: [HomeMixin],
  data() {
    return {
      columns,
      time: "",
      total: "",
      fullTime: "",
      fullTotal: "",
      formLayout: "inline",
      radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px"
      },
      size: [
        {
          id: 1,
          label: "Pequeno (300ml)",
          time: 5,
          value: 10
        },
        {
          id: 2,
          label: "Médio (500ml)",
          time: 7,
          value: 13
        },
        {
          id: 3,
          label: "Grande (700ml)",
          time: 10,
          value: 15
        }
      ],
      flavor: [
        {
          id: 1,
          label: "Morango",
          time: 0
        },
        {
          id: 2,
          label: "Banana",
          time: 0
        },
        {
          id: 3,
          label: "Kiwi",
          time: 5
        }
      ],
      customization: [
        {
          id: 1,
          label: "Granola",
          value: 0,
          time: 0
        },
        {
          id: 2,
          label: "Paçoca",
          value: 3,
          time: 3
        },
        {
          id: 3,
          label: "Leite ninho",
          value: 3,
          time: 0
        }
      ]
    };
  },
  components: {
    Table
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : {};
    }
  },
  methods: {
    findItemInList(item) {
      const list = this.getCustomizationSelected;
      return list.filter(_item => _item.id === item.id);
    },
    checkedCustomSelected(item) {
      const result = this.findItemInList(item);
      return result && result.length === 1;
    },
    onChangeSize(e) {
      this.ActionSetSizeSelected(e.target.value);
      setTimeout(() => {
        this.waitingTime();
      }, 0);
    },
    onChangeFlavor(e) {
      this.ActionSetFlavorSelected(e.target.value);
      this.waitingTime();
    },
    onChangeCustomization(e) {
      let list = this.getCustomizationSelected;
      const result = this.findItemInList(e.target.value);
      if (result && result.length > 0) {
        list = list.filter(item => item.id !== e.target.value.id);
      } else {
        list.push(e.target.value);
      }

      this.ActionSetCustomizationSelected(list);
      this.waitingTime();
    },
    handlerEdit(item) {
      this.ActionSetItem(item);
    },
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
    formatValue(value) {
      return `R$ ${value},00`;
    },
    getFullValueAndTime() {
      const list = this.getDataList;
      this.fullTime = list.reduce((acumulador, item, index, array) => {
        return acumulador + item.time;
      }, 0);

      this.fullTotal = list.reduce((acumulador, item, index, array) => {
        return acumulador + parseInt(item.total.replace(",", "."));
      }, 0);

      this.fullTotal = `${this.fullTotal},00`;
    },
    waitingTime() {
      if (this.getSizeSelected.time) {
        this.time = this.getSizeSelected.time;
        this.total = this.getSizeSelected.value;
      }

      if (this.getFlavorSelected.time) {
        this.time += this.getFlavorSelected.time;
      }

      if (this.getCustomizationSelected.length > 0) {
        this.getCustomizationSelected.forEach(item => {
          this.time = this.time + item.time;
          this.total = this.total + item.value;
        });
      }

      this.total = `${this.total},00`;
      this.ActionSetTotal(this.total);
      this.ActionSetTime(this.time);
    },
    getCustomLabel(list) {
      let label = "";
      list.forEach((elem, id) => {
        if (id === 0) {
          label += `${elem.label}${elem.value ? ` + RS ${elem.value},00` : ''}`;
        } else {
          label += `, ${elem.label}${elem.value ? ` + RS ${elem.value},00` : ''}`;
        }
      });
      return label;
    },
    onClickAddOrder(e) {
      const item = this.getState;
      const data = this.getDataList;

      if (item.key !== null) {
        data.splice(item.key, 1, item);
      } else {
        data.push({
          ...item,
          key: data.length,
          customization: this.getCustomLabel(item.customizationSelected)
        });
      }
    
      this.ActionSetDataList(data);
      this.getFullValueAndTime();
      this.ActionSetClear();

    },
    onClickFinished(e) {

      this.time = "";
      this.total = "";
      this.fullTime = "";
      this.fullTotal = "";

      let data = this.getDataList;
      data = data.splice(0, data.length);
      this.ActionSetDataList(data);
      this.ActionSetClear();
      this.ActionSetAlertShow(true);
    }
  }
};
</script>
<style scoped lang="scss">
@import "./selectItems.scss";
</style>
