const admin = require("firebase-admin");
const serviceAccount = require("./aofiee-developer-firebase-adminsdk-a4hr9-0e578c1b53.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://aofiee-developer.firebaseio.com"
});
let db = admin.firestore()
const functions = require('firebase-functions');
const axios = require('axios');
const END_POINT = "https://api.line.me/v2/bot";
const HEADER = {
    "Content-Type":"application/json",
    "Authorization": `Bearer ${functions.config().linebot.key}`
}
const HouseMaker = {
    "type": "carousel",
    "contents": [
      {
        "type": "bubble",
        "size": "micro",
        "hero": {
          "type": "image",
          "url": "https://firebasestorage.googleapis.com/v0/b/aofiee-developer.appspot.com/o/Line%2FAir.jpg?alt=media&token=8ab2f30c-ddd4-48fa-a0b1-768f5c7f500f",
          "size": "full",
          "aspectMode": "cover",
          "aspectRatio": "320:400",
          "position": "relative"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "Air Condition",
              "weight": "bold",
              "size": "sm",
              "wrap": true
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "ช่างล้างแอร์ ซ่อมแอร์",
                      "wrap": true,
                      "color": "#8c8c8c",
                      "size": "xs",
                      "flex": 5
                    }
                  ]
                }
              ]
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        },
        "action": {
          "type": "uri",
          "label": "action",
          "uri": "http://linecorp.com/"
        }
      },
      {
        "type": "bubble",
        "size": "micro",
        "hero": {
          "type": "image",
          "url": "https://firebasestorage.googleapis.com/v0/b/aofiee-developer.appspot.com/o/Line%2FElectric.jpg?alt=media&token=a5093e4f-b528-443c-b1af-25a11dd919ed",
          "size": "full",
          "aspectMode": "cover",
          "aspectRatio": "320:400"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "Electric Work",
              "weight": "bold",
              "size": "sm",
              "wrap": true
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "ช่างไฟผู้ชำนาญการ",
                      "wrap": true,
                      "color": "#8c8c8c",
                      "size": "xs",
                      "flex": 5
                    }
                  ]
                }
              ]
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        },
        "action": {
          "type": "uri",
          "label": "action",
          "uri": "http://linecorp.com/"
        }
      },
      {
        "type": "bubble",
        "size": "micro",
        "hero": {
          "type": "image",
          "url": "https://firebasestorage.googleapis.com/v0/b/aofiee-developer.appspot.com/o/Line%2FWater.jpg?alt=media&token=e8175c0f-ff2a-4fcb-8267-8b5afa3221bd",
          "size": "full",
          "aspectMode": "cover",
          "aspectRatio": "320:400"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "Water Work",
              "weight": "bold",
              "size": "sm"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "ช่างประปา งานท่อ งานห้องน้ำ ห้องครัว",
                      "wrap": true,
                      "color": "#8c8c8c",
                      "size": "xs",
                      "flex": 5
                    }
                  ]
                }
              ]
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        },
        "action": {
          "type": "uri",
          "label": "action",
          "uri": "http://linecorp.com/"
        }
      },
      {
        "type": "bubble",
        "size": "micro",
        "hero": {
          "type": "image",
          "url": "https://firebasestorage.googleapis.com/v0/b/aofiee-developer.appspot.com/o/Line%2FCarpenter.jpg?alt=media&token=67fb869c-2e41-44c6-a5ce-c16ccf5a8cb0",
          "size": "full",
          "aspectMode": "cover",
          "aspectRatio": "320:400"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "Carpenter",
              "weight": "bold",
              "size": "sm"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "ช่างต่อเติมบ้าน ซ่อมบ้าน",
                      "wrap": true,
                      "color": "#8c8c8c",
                      "size": "xs",
                      "flex": 5
                    }
                  ]
                }
              ]
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        }
      }
    ]
  }
const Emergency = {
    "type": "carousel",
    "contents": [
      {
        "type": "bubble",
        "size": "micro",
        "hero": {
          "type": "image",
          "url": "https://firebasestorage.googleapis.com/v0/b/aofiee-developer.appspot.com/o/Line%2FSecurity.jpg?alt=media&token=10947965-7464-480f-ad68-0ed6bdfa4d2c",
          "size": "full",
          "aspectMode": "cover",
          "aspectRatio": "320:400",
          "position": "relative"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "Security",
              "weight": "bold",
              "size": "sm",
              "wrap": true
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "เบอร์ยาม และเบอร์ฉุกเฉิน เหตุด่วนเหตุร้าย",
                      "wrap": true,
                      "color": "#8c8c8c",
                      "size": "xs",
                      "flex": 5
                    }
                  ]
                }
              ]
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        },
        "action": {
          "type": "uri",
          "label": "action",
          "uri": "http://linecorp.com/"
        }
      },
      {
        "type": "bubble",
        "size": "micro",
        "hero": {
          "type": "image",
          "url": "https://firebasestorage.googleapis.com/v0/b/aofiee-developer.appspot.com/o/Line%2Fcovid.jpg?alt=media&token=2ff31fbb-9c6b-4c13-b161-6f68f31a1223",
          "size": "full",
          "aspectMode": "cover",
          "aspectRatio": "320:400"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "COVID19",
              "weight": "bold",
              "size": "sm",
              "wrap": true
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "เบอร์โทรติดต่อสำหรับผู้ป่วย COVID19",
                      "wrap": true,
                      "color": "#8c8c8c",
                      "size": "xs",
                      "flex": 5
                    }
                  ]
                }
              ]
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        },
        "action": {
          "type": "uri",
          "label": "action",
          "uri": "http://linecorp.com/"
        }
      },
      {
        "type": "bubble",
        "size": "micro",
        "hero": {
          "type": "image",
          "url": "https://firebasestorage.googleapis.com/v0/b/aofiee-developer.appspot.com/o/Line%2Frescue.jpg?alt=media&token=5a124f3f-8ac8-46f6-9361-71d7702a6e9d",
          "size": "full",
          "aspectMode": "cover",
          "aspectRatio": "320:400"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "Transportation",
              "weight": "bold",
              "size": "sm"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "เบอร์โทรฉุกเฉินเกี่ยวกับการเดินทาง",
                      "wrap": true,
                      "color": "#8c8c8c",
                      "size": "xs",
                      "flex": 5
                    }
                  ]
                }
              ]
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        },
        "action": {
          "type": "uri",
          "label": "action",
          "uri": "http://linecorp.com/"
        }
      }
    ]
  }
const BeaconFlex = {
    "type": "bubble",
    "hero": {
      "type": "image",
      "url": "https://firebasestorage.googleapis.com/v0/b/aofiee-developer.appspot.com/o/Line%2FBeacon.png?alt=media&token=549b970f-3977-4b26-abef-1f1294d9abb0",
      "size": "full",
      "aspectRatio": "20:13",
      "aspectMode": "cover",
      "action": {
        "type": "uri",
        "uri": "http://linecorp.com/"
      }
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "spacing": "md",
      "contents": [
        {
          "type": "text",
          "text": "LINE BOT FOR\nPASSORN",
          "wrap": true,
          "weight": "bold",
          "gravity": "center",
          "size": "xl"
        },
        {
          "type": "box",
          "layout": "vertical",
          "margin": "lg",
          "spacing": "sm",
          "contents": [
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "News",
                  "color": "#aaaaaa",
                  "size": "sm",
                  "flex": 1
                },
                {
                  "type": "text",
                  "text": "รับข่าวสารต่างๆ",
                  "wrap": true,
                  "size": "sm",
                  "color": "#666666",
                  "flex": 4
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "Facility",
                  "color": "#aaaaaa",
                  "size": "sm",
                  "flex": 1
                },
                {
                  "type": "text",
                  "text": "ค้นหาสิ่งอำนวยความสะดวกต่างๆ",
                  "wrap": true,
                  "color": "#666666",
                  "size": "sm",
                  "flex": 4
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "Free",
                  "color": "#aaaaaa",
                  "size": "sm",
                  "flex": 1
                },
                {
                  "type": "text",
                  "text": "ไม่มีค่าใช้จ่าย",
                  "wrap": true,
                  "color": "#666666",
                  "size": "sm",
                  "flex": 4
                }
              ]
            }
          ]
        },
        {
          "type": "box",
          "layout": "vertical",
          "margin": "xxl",
          "contents": [
            {
              "type": "spacer"
            },
            {
              "type": "image",
              "url": "https://firebasestorage.googleapis.com/v0/b/aofiee-developer.appspot.com/o/Line%2F238clczs.png?alt=media&token=373615b6-526d-40e2-b085-532da23d545b",
              "aspectMode": "cover",
              "size": "xl"
            },
            {
              "type": "text",
              "text": "BOT ทำเล่น เอาไว้หาเบอร์โทรศัพท์ หรือบริการต่างๆ ในหมู่บ้าน",
              "color": "#aaaaaa",
              "wrap": true,
              "margin": "xxl",
              "size": "xs"
            }
          ]
        }
      ]
    }
  }
const Bubble = (Flex) => {
    return {
        "type": "flex",
        "altText": "This is a Flex Message",
        "contents": Flex
      }
}
const getRecieverUser = async (category,uid, db) => {
	const data = await db.collection(category).doc(uid).get();
	if(data.empty)
		{
			return -1;
		}
	else return data;
}
const setRecieverUser = async (category,uid,db) => {
  const data = await db.collection(category).doc(uid).set({"recieved-content":true});
  return data;
}
const setNewUser = async (category,uid,userData,db) => {
  const data = await db.collection(category).doc(uid).set(userData);
  return data;
}
const getUserDetail = (uid) => {
  const res = axios({
    url: `${END_POINT}/profile/${uid}`,
    method: "GET",
    headers: HEADER,
  });
  return res;
}
const reply = (replyToken,payload) => {
    const res = axios({
        url: `${END_POINT}/message/reply`,
        method: "POST",
        headers: HEADER,
        data: {replyToken: replyToken, messages: payload}
    });
    return res;
}
exports.LineBeacon = functions.https.onRequest(async(req,res) => {
    if(typeof(req.body.events[0])!=="undefined") {
        const e = req.body.events[0];
        // console.log(req.body);
        // console.log(e.source.userId);
        switch(e.type){
            case "beacon":
              reciever = await getRecieverUser("reciever-user",e.source.userId,db);
              console.log(reciever.data());
              if (typeof(reciever.data()) === "undefined") {
                await setRecieverUser("reciever-user",e.source.userId,db);
                userData = await getUserDetail(e.source.userId);
                await setNewUser("beacon-user-data",e.source.userId,userData.data,db);
                await reply(e.replyToken,[Bubble(BeaconFlex)]);
              }
            break;
            case "message":
                switch(e.message.text){
                    case "Emergency":
                        await reply(e.replyToken,[Bubble(Emergency)]);
                    break;
                    case "Housemaker":
                        await reply(e.replyToken,[Bubble(HouseMaker)]);
                    break;
                }
                console.log(e.message.text);
            break;
        }
    }
    res.send("Hi");
});

