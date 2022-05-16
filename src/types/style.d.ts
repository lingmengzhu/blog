/*
 * @Descripttion: css模块化声明
 */
// css模块声明
declare module '*.module.less' {
  const content: any
  export = content
}
