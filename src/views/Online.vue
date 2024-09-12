<template>
  <div class="online">
    <Header></Header>
    <p class="way">首页>在线咨询</p>
    <div class="middle">
      <div class="middle-content">
        <div class="content-left">
          <div class="user-list">
            <p
              style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)"
              :class="currentUser.id == item.id ? 'active' : ''"
              @click="currentChange(item)"
              v-for="(item, i) in userList"
              :key="i"
            >
              {{ item.name }}
            </p>
          </div>
        </div>
        <div class="content-right">
          <div class="chat-content">
            <div
              v-for="(message, index) in chatMessages"
              :key="index"
              :class="{
                'message-from': message.isFromUser,
                'message-to': !message.isFromUser,
              }"
            >
              <div class="message-bubble">
                <p>{{ message.msg }}</p>
              </div>
            </div>
          </div>
          <div
            style="
              width: 899px;
              background-color: white;
              box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
            "
          >
            <!-- 仿微信聊天输入框直接写行类样式 -->
            <div class="chat-input-wrapper">
              <textarea
                class="chat-input"
                placeholder="请输入消息..."
                rows="3"
                v-model="currentMsg"
                @input="handleInput"
              ></textarea>
              <div class="send-button">
                <button @click="sendMessage">发送</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { getMatchPherapist, addSession } from "@/service/api/index";
import "@/css/Online.scss";
export default {
  name: "Home",
  data() {
    return {
      searchData: {
        pageNumber: 1,
        pageSize: 20,
        roleType: "2",
      },
      sendForm: {
        messageType: "",
        fromUserId: "",
        toUserId: "",
        msg: "",
        isFromUser: true,
        fromRoleType: null,
        toRoleType: null,
      },
      currentMsg: "",
      currentUser: {},
      userInfo: {},
      userList: [],
      ws: null,
      chatMessages: [],
    };
  },
  components: {
    Header,
    Footer,
  },
  created() {
    this.userInfo = JSON.parse(localStorage.getItem("USERINFO"));
    if (this.userInfo.roleType == 1) {
      this.searchData.roleType = 2;
    } else {
      this.searchData.roleType = 1;
    }
    this.queryList();
    this.connectWebSocket();
  },

  destroyed() {
    this.ws.close();
  },
  methods: {
    //连接websocket
    connectWebSocket() {
      this.ws = new WebSocket("ws://162.14.111.211:9002/chat");

      this.ws.onopen = () => {
        console.log("连接成功");
        this.heartbeat(); // 开启心跳检测
      };

      this.ws.onmessage = (e) => {
        console.log(e);
        // 接收到消息
        let data = JSON.parse(e.data);
        let params = {
          msg: data.msg,
          messageType: "CONNECT",
          fromUserId: this.userInfo.id,
          isFromUser: false,
          toUserId: this.currentUser.id,
          fromRoleType: this.userInfo.roleType,
          toRoleType: this.currentUser.roleType,
        };
        this.currentUser = {
          id: data.toUserId,
        };
        this.chatMessages.push(JSON.parse(JSON.stringify(params)));
        this.resetHeartbeat(); // 收到消息时，重置心跳
      };

      this.ws.onclose = () => {
        console.log("连接关闭");
        this.reconnectWebSocket(); // 尝试重连
      };

      this.ws.onerror = () => {
        console.log("连接错误");
        this.reconnectWebSocket(); // 遇到错误时重连
      };
    },
    // 心跳包机制
    heartbeat() {
      let params = {
        msg: "",
        messageType: "CONNECT",
        fromUserId: this.userInfo.id,
        isFromUser: false,
        toUserId: this.currentUser.id,
        fromRoleType: this.userInfo.roleType,
        toRoleType: this.currentUser.roleType,
      };
      this.heartbeatInterval = setInterval(() => {
        if (this.ws.readyState === WebSocket.OPEN) {
          this.ws.send(JSON.stringify(params));
        }
      }, 5000); // 每5秒发送一次心跳包
    },

    // WebSocket 重连机制
    reconnectWebSocket() {
      clearInterval(this.heartbeatInterval);
      setTimeout(() => {
        console.log("尝试重新连接...");
        this.connectWebSocket(); // 重新连接 WebSocket
      }, 3000); // 3秒后尝试重连
    },

    resetHeartbeat() {
      clearInterval(this.heartbeatInterval);
      this.heartbeat();
    },

    handleInput(event) {
      // 获取输入框的值
      const message = event.target.value;
      this.currentMsg = message;
    },
    // 获取用户列表
    queryList() {
      getMatchPherapist(this.searchData)
        .then((res) => {
          this.userList = res.data.data.records;
        })
        .catch((err) => {
          this.$message.error(err.data.msg);
        });
    },
    //当前选中事件
    currentChange(val) {
      this.currentUser = val;
    },

    sendMessage() {
      if (!this.currentUser.id) {
        return this.$message.error("请选择咨询对象");
      }
      if (this.currentMsg == "") {
        return this.$message.error("请输入内容");
      }
      this.sendForm = {
        msg: this.currentMsg,
        messageType: "SEND_MSG",
        fromUserId: this.userInfo.id,
        toUserId: this.currentUser.id,
        isFromUser: true,
        fromRoleType: this.userInfo.roleType,
        toRoleType: this.currentUser.roleType,
      };
      // ws发送消息
      this.ws.send(JSON.stringify(this.sendForm));
      console.log(JSON.stringify(this.sendForm));
      this.chatMessages.push(JSON.parse(JSON.stringify(this.sendForm)));
      this.currentMsg = "";
      //如果userInfo.roleType == 2调saveSession
      console.log(this.userInfo.roleType)
      if (this.userInfo.roleType == 2) {
        this.saveSession(this.userInfo.id);
      }
    },

    // 保存心理医生会话
    saveSession(id) {
      addSession({ therapistId: id })
    },
  },
};
</script>

<style scoped>
.message-from,
/* .message-to {
  margin-bottom: 10px;
  display: flex;
} */

.message-from {
  display: flex;
  justify-content: flex-end; /* 发出的消息靠右对齐 */
  margin-bottom: 10px;
}

.message-to {
  display: flex;
  justify-content: flex-start; /* 收到的消息靠左对齐 */
  margin-bottom: 10px;
}

.message-bubble {
  max-width: 60%;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  word-wrap: break-word;
  position: relative;
}

.message-bubble p {
  margin: 0;
}

.chat-input-wrapper {
  width: calc(100% - 40px);
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: #f6f6f6;
}

.chat-input {
  flex: 1;
  resize: none;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 14px;
  background-color: #f6f6f6;
}

.send-button {
  margin-left: 10px;
}

.send-button button {
  background-color: #07c160;
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

.send-button button:hover {
  background-color: #05a150;
}

.message-from .message-bubble {
  background-color: #07c160; /* 发送消息的背景色 */
  border-top-right-radius: 0; /* 右上角圆角变直角 */
}

.message-to .message-bubble {
  background-color: #e5e5ea; /* 接收消息的背景色 */
  border-top-left-radius: 0; /* 左上角圆角变直角 */
  color: #000;
}
</style>
