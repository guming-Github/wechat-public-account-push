export const config = {

   APP_ID: "wx95a939c0c88c5907",
   APP_SECRET: "8f36780751b3a59f7611f131ae81b9f8",

  USERS: [
    {
      name: "老婆0",
      id: "odS7L542WxnLSJZRwcGCEYFb014Q",
      useTemplateId: "Lq-pwjTgoQQDRUOZUPC48mt9Zdk2qI8LtKQoBDxFhcw",
      province: "河南",
      city: "焦作",
      //openUrl: "https://www.yuque.com/dashboard"
    }
  ],


 

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "Lq-pwjTgoQQDRUOZUPC48mt9Zdk2qI8LtKQoBDxFhcw",
  CALLBACK_USERS: [
    {

      name: "自己",
      id: "odS7L542WxnLSJZRwcGCEYFb014Q",
    }, 
  ],

    
  FESTIVALS: [
    {"type": "生日", "name": "老婆", "year": "1996", "date": "09-02"},
  ],

  FESTIVALS_LIMIT: 0,


  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2015-05-01"}
  ],

  SLOT_LIST: [
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
     "你主要的问题在于读书太少而想得太多",
    ]},
  ],

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: "动画"
}
