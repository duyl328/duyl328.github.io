/**
 * Time:2025/1/18 11:05 56
 * Name:fileUtils.ts
 * Path:docs/.vitepress/theme/utils
 * ProjectName:github.io
 * Author:charlatans
 *
 *  Il n'ya qu'un héroïsme au monde :
 *     c'est de voir le monde tel qu'il est et de l'aimer.
 */

export class FileUtils {
  /**
   * 获取指定路径的文件名
   * @param url
   */
  static getFileName (url: string) {
    console.log(url,"文件名称");
    url = url.replace(/\\/g, '/')
    const segments = url.split('/')
    return segments[segments.length - 1]
  }
  
  /**
   * 获取指定路径最后一个文件夹
   * @param url
   */
  static getLastFolderName (url: string): string {
    console.log(url,"文件夹名称");
    // 统一路径分隔符为 '/'
    url = url.replace(/\\/g, '/')
    const segments = url.split('/')
    
    if (segments[segments.length - 1].includes('.')) {
      return segments[segments.length - 2]
    }
    
    return segments[segments.length - 1]
  }
  
  /**
   * 截断指定路径
   */
  static getRelativePath (fullPath: string, rootPath: string): string {
    // 使用 replace 去掉根路径部分，返回相对路径
    const normalizedRootPath = rootPath.replace(/\\/g, '/')
    const normalizedFullPath = fullPath.replace(/\\/g, '/')
    
    return normalizedFullPath.replace(normalizedRootPath + '/', '')
  }
  
  /**
   * 按照指定的规则截断路径 【如果是正数，返回前 n 个文件夹路径，如果是负数，返回倒数第 n 个到第 0 个
   * @param url
   * @param n
   */
  static getRoleFolderName (url: string,n:number): string {
    url = url.replace(/\\/g, '/')
    const segments = url.split('/')
    if (n > 0) {
      return segments.slice(0, n).join('/');
    } else if (n < 0) {
      return segments.slice(0, segments.length + n).join('/');
    } else {
      return '';
    }
  }
  
  /**
   * 去除后缀名
   * @param filename
   */
  static removeExtension(filename:string) {
    return filename.slice(0, filename.lastIndexOf('.')) || filename;
  }
  
}
