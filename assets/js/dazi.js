window.onload = function () {
        var typed = new Typed(".element", {
          /**
           * @property {array} strings 要键入的字符串
           * @property {string} stringsElement 包含字符串子元素的元素的ID
           */
          strings: ['Hi,I am Blank', '你好，我是空白', '不爱折腾的前端，跟咸鱼有什么区别'],
          stringsElement: null,

          /**
           * @property {number} typeSpeed 输入速度，以毫秒为单位
           */
          typeSpeed: 100,

          /**
           * @property {number} startDelay 键入之前的时间以毫秒开始
           */
          startDelay: 0,

          /**
           * @property {number} backSpeed 退格速度，以毫秒为单位
           */
          backSpeed: 50,

          /**
           * @property {boolean} smartBackspace 是否只退格与前一个字符串不匹配的内容
           */
          smartBackspace: true,

          /**
           * @property {boolean} shuffle 是否洗牌
           */
          shuffle: false,

          /**
           * @property {number} backDelay 退回之前的时间，以毫秒为单位
           */
          backDelay: 700,

          /**
           * @property {boolean} fadeOut 是否用淡出替代空格
           * @property {string} fadeOutClass 用于淡入淡出动画的css类
           * @property {boolean} fadeOutDelay 以毫秒为单位淡出延迟
           */
          fadeOut: false,
          fadeOutClass: 'typed-fade-out',
          fadeOutDelay: 500,

          /**
           * @property {boolean} loop 是否循环字符串
           * @property {number} loopCount 循环次数
           */
          loop: true,
          loopCount: Infinity,

          /**
           * @property {boolean} showCursor 是否显示光标
           * @property {string} cursorChar 光标的字符
           * @property {boolean} autoInsertCss 是否将光标和fadeOut的CSS插入HTML <head>
           */
          showCursor: true,
          cursorChar: '|',
          autoInsertCss: true,

          /**
           * @property {string} attr 输入属性
           * 例如：输入占位符，值或仅HTML文本
           */
          attr: null,

          /**
           * @property {boolean} bindInputFocusEvents 如果el是文本输入，则绑定到焦点和模糊
           */
          bindInputFocusEvents: false,

          /**
           * @property {string} contentType 明文的'html'或'null'
           */
          contentType: 'html',

          /**
           * 所有打字都已完成调用的回调函数
           * @param {Typed} self
           */
          onComplete: (self) => {
            console.log('所有打字都已完成调用的回调函数', self);
          },

          /**
           * 在键入每个字符串之前调用的回调函数
           * @param {number} arrayPos
           * @param {Typed} self
           */
          preStringTyped: (arrayPos, self) => {
            console.log('在键入每个字符串之前调用的回调函数', arrayPos, self);
          },

          /**
           * 输入每个字符串后调用的回调函数
           * @param {number} arrayPos
           * @param {Typed} self
           */
          onStringTyped: (arrayPos, self) => {
            console.log('输入每个字符串后调用的回调函数', arrayPos, self);
          },

          /**
           * 在循环期间，在键入最后一个字符串之后调用的回调函数
           * @param {Typed} self
           */
          onLastStringBackspaced: (self) => {
            console.log('在循环期间，在键入最后一个字符串之后调用的回调函数', self);
          },

          /**
           * 打字已经停止调用的回调函数
           * @param {number} arrayPos
           * @param {Typed} self
           */
          onTypingPaused: (arrayPos, self) => {
            console.log('打字已经停止调用的回调函数', arrayPos, self);
          },

          /**
           * 停止后开始键入调用的回调函数
           * @param {number} arrayPos
           * @param {Typed} self
           */
          onTypingResumed: (arrayPos, self) => {
            console.log('停止后开始键入调用的回调函数', arrayPos, self);
          },

          /**
           * 重置后调用的回调函数
           * @param {Typed} self
           */
          onReset: (self) => {
            console.log('重置后调用的回调函数', self);
          },

          /**
           * 停止后调用的回调函数
           * @param {number} arrayPos
           * @param {Typed} self
           */
          onStop: (arrayPos, self) => {
            console.log('停止后调用的回调函数', arrayPos, self);
          },

          /**
           * 开始后调用的回调函数
           * @param {number} arrayPos
           * @param {Typed} self
           */
          onStart: (arrayPos, self) => {
            console.log('开始后调用的回调函数', arrayPos, self);
          },

          /**
           * 销毁后调用的回调函数
           * @param {Typed} self
           */
          onDestroy: (self) => {
            console.log('销毁后调用的回调函数', self);
          }
        });
      }

