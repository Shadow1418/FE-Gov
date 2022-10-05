import ENUM from "@/script/enum.js";
export default {
  name: "BaseForm",
  methods: {
    
    /**
     * Mở form
     * Created by: NCDQuang (29/09/2022)
     */
    open(param) {
      if (param.formMode === ENUM.FormMode.Edit) {
        this.bindingData(param.data);
      }
    },

    /**
     * Binding dữ liệu vào form
     * Created by: NCDQuang (29/09/2022)
     */
    bindingData(data) {
      console.log(data);
    },

    /**
     * Lưu dữ liệu form
     * Created by: NCDQuang (29/09/2022)
     */
    save() {
      console.log("save");
    },
  },
};









