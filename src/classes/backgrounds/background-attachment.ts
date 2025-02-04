import { clazzArrayToMap } from "../../common/utils";

export const backgroundAttachment = clazzArrayToMap([
  { clazz: "bg-fixed", properties: "background-attachment: fixed;" },
  { clazz: "bg-local", properties: "background-attachment: local;" },
  { clazz: "bg-scroll", properties: "background-attachment: scroll;" },
]);
