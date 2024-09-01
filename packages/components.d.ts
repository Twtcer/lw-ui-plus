import LwLayoutPage from "./layout-page/src/index.vue"
import LwLayoutPageItem from "./layout-page-item/src/index.vue"
import LwQueryCondition from "./query-condition/src/index.vue"
import LwTable from "./table/src/index.vue"
import LwForm from "./form/src/index.vue"
import LwSelect from "./select/src/index.vue"
import LwSelectTable from "./select-table/src/index.vue"
import LwDetail from "./detail/src/index.vue"
import LwButton from "./button/src/index.vue"
import LwStepWizard from "./step-wizard/src/index.vue"
import LwTimerBtn from "./timer-btn/src/index.vue"
import LwModuleForm from "./module-form/src/index.vue"
import LwAdaptivePage from "./adaptive-page/src/index.vue"
import LwDatePicker from "./date-picker/src/index.vue"
import LwRadio from "./radio/src/index.vue"
import LwCheckbox from "./checkbox/src/index.vue"
import LwChart from "./chart/src/index.vue"
import LwTabs from "./tabs/src/index.vue"

declare module "vue" {
  export interface GlobalComponents {
    LwLayoutPage: typeof LwLayoutPage
    LwLayoutPageItem: typeof LwLayoutPageItem
    LwQueryCondition: typeof LwQueryCondition
    LwTable: typeof LwTable
    LwForm: typeof LwForm
    LwSelect: typeof LwSelect
    LwSelectTable: typeof LwSelectTable
    LwDetail: typeof LwDetail
    LwButton: typeof LwButton
    LwStepWizard: typeof LwStepWizard
    LwTimerBtn: typeof LwTimerBtn
    LwModuleForm: typeof LwModuleForm
    LwAdaptivePage: typeof LwAdaptivePage
    LwDatePicker: typeof LwDatePicker
    LwRadio: typeof LwRadio
    LwCheckbox: typeof LwCheckbox
    LwChart: typeof LwChart
    LwTabs: typeof LwTabs
  }
}
