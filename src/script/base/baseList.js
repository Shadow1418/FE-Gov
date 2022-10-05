import ENUM from "@/script/enum.js";
import BaseForm from "@/script/base/baseForm.js";
export default {
  name: "BaseGrid",
  data() {
    return {
      // Trạng thái hiển thị của form detail của grid
      isShowDialogShowed: false,
      grid: null,
      // Lưu lại dữ liệu
      cacheData: [],
      // Form detail
      formDetail: { ...BaseForm },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    /**
     * Lấy dữ liệu từ server
     * Created by: NVDQuang (29/09/2022)
     */
    getData() {
      return [
        {
          EmulationTitleID: 1,
          EmulationTitleName: "Lao động tiên tiến",
          EmulationTitleCode: "LĐTTCX",
          ApplyObject: "Cá nhân",
          CommendationLevel: "Cấp xã/tương đương",
          MovementType: "Phong trào",
          IsActive: "Sử dụng",
        },
        {
          EmulationTitleID: 2,
          EmulationTitleName: "Lao động tiên tiến",
          EmulationTitleCode: "LĐTTCX",
          ApplyObject: "Cá nhân",
          CommendationLevel: "Cấp xã/tương đương",
          MovementType: "Phong trào",
          IsActive: "Sử dụng",
        },
        {
          EmulationTitleID: 3,
          EmulationTitleName: "Lao động tiên tiến",
          EmulationTitleCode: "LĐTTCX",
          ApplyObject: "Cá nhân",
          CommendationLevel: "Cấp xã/tương đương",
          MovementType: "Phong trào",
          IsActive: "Sử dụng",
        },
        {
          EmulationTitleID: 4,
          EmulationTitleName: "Lao động tiên tiến",
          EmulationTitleCode: "LĐTTCX",
          ApplyObject: "Cá nhân",
          CommendationLevel: "Cấp xã/tương đương",
          MovementType: "Phong trào",
          IsActive: "Sử dụng",
        },
        {
          EmulationTitleID: 5,
          EmulationTitleName: "Lao động tiên tiến",
          EmulationTitleCode: "LĐTTCX",
          ApplyObject: "Cá nhân",
          CommendationLevel: "Cấp xã/tương đương",
          MovementType: "Phong trào",
          IsActive: "Sử dụng",
        },
        {
          EmulationTitleID: 6,
          EmulationTitleName: "Lao động tiên tiến",
          EmulationTitleCode: "LĐTTCX",
          ApplyObject: "Cá nhân",
          CommendationLevel: "Cấp xã/tương đương",
          MovementType: "Phong trào",
          IsActive: "Sử dụng",
        },
        {
          EmulationTitleID: 7,
          EmulationTitleName: "Lao động tiên tiến",
          EmulationTitleCode: "LĐTTCX",
          ApplyObject: "Cá nhân",
          CommendationLevel: "Cấp xã/tương đương",
          MovementType: "Phong trào",
          IsActive: "Sử dụng",
        },
        {
          EmulationTitleID: 8,
          EmulationTitleName: "Lao động tiên tiến",
          EmulationTitleCode: "LĐTTCX",
          ApplyObject: "Cá nhân",
          CommendationLevel: "Cấp xã/tương đương",
          MovementType: "Phong trào",
          IsActive: "Sử dụng",
        },
        {
          EmulationTitleID: 9,
          EmulationTitleName: "Lao động tiên tiến",
          EmulationTitleCode: "LĐTTCX",
          ApplyObject: "Cá nhân",
          CommendationLevel: "Cấp xã/tương đương",
          MovementType: "Phong trào",
          IsActive: "Sử dụng",
        },
        {
          EmulationTitleID: 10,
          EmulationTitleName: "Lao động tiên tiến",
          EmulationTitleCode: "LĐTTCX",
          ApplyObject: "Cá nhân",
          CommendationLevel: "Cấp xã/tương đương",
          MovementType: "Phong trào",
          IsActive: "Sử dụng",
        },
        {
          EmulationTitleID: 11,
          EmulationTitleName: "Lao động tiên tiến",
          EmulationTitleCode: "LĐTTCX",
          ApplyObject: "Cá nhân",
          CommendationLevel: "Cấp xã/tương đương",
          MovementType: "Phong trào",
          IsActive: "Sử dụng",
        },
        {
          EmulationTitleID: 12,
          EmulationTitleName: "Lao động tiên tiến",
          EmulationTitleCode: "LĐTTCX",
          ApplyObject: "Cá nhân",
          CommendationLevel: "Cấp xã/tương đương",
          MovementType: "Phong trào",
          IsActive: "Sử dụng",
        },
      ];
    },
    /**
     * Thêm mới
     * Created by: NVDQuang (29/09/2022)
     */
    add() {
      let param = {
        FormMode: ENUM.FormMode.Add,
      };
      if (this.formDetail) {
        this.formDetail.methods.open(param);
        this.isFormDetailShowed = true;
      }
    },
    /**
     * Chỉnh sửa
     * Created by: NVDQuang (29/09/2022)
     */
    edit() {
      let param = {
        FormMode: ENUM.FormMode.Edit,
      };
      if (this.formDetail) {
        this.formDetail.methods.open(param);
        this.isFormDetailShowed = true;
      }
    },
    /**
     * Thực hiện đóng form detal
     * Created by: NVDQuang (28/09/2022)
     */
    closeFormDetail() {
      this.isFormDetailShowed = false;
    },
    /**
     * render table
     */
    async renderTable() {
      //     <BaseTable
      //     :idName="'EmulationTitleID'"
      //     :columns="columns"
      //     :data="emulationTitleList"
      //     @selection-change="handleSelectionChange"
      //   >
      //     <BaseTableColumn
      //       :dataType="resource.DataTypeColumn.String"
      //       :prop="'EmulationTitleName'"
      //       :label="'Tên danh hiệu thi đua'"
      //     />
      //     <BaseTableColumn
      //       :dataType="resource.DataTypeColumn.String"
      //       :prop="'EmulationTitleCode'"
      //       :label="'Mã danh hiệu'"
      //       :width="'160px'"
      //     />
      //     <BaseTableColumn
      //       :dataType="resource.DataTypeColumn.String"
      //       :prop="'ApplyObject'"
      //       :label="'Đối tượng khen thưởng'"
      //       :width="'180px'"
      //     />
      //     <BaseTableColumn
      //       :dataType="resource.DataTypeColumn.String"
      //       :prop="'CommendationLevel'"
      //       :label="'Cấp khen thưởng'"
      //       :width="'200px'"
      //     />
      //     <BaseTableColumn
      //       :dataType="resource.DataTypeColumn.String"
      //       :prop="'MovementType'"
      //       :label="'Loại phong trào'"
      //       :width="'200px'"
      //     />
      //     <BaseTableColumn
      //       :dataType="resource.DataTypeColumn.String"
      //       :prop="'IsActive'"
      //       :label="'Trạng thái'"
      //       :width="'200px'"
      //     />
      //   </BaseTable>
      //   var button = document.createElement(`<BaseButton
      //     class="button button-icon button-style1 icon-plus"
      //     >Thêm danh hiệu</BaseButton
      //   >`);
    },
  },
};