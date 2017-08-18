class Dialog {}

/**
 * 简易提示弹窗
 * params
 * type 0表示提示窗口，1表示成功，2表示失败, 3表示确认
 * text 提示内容
 * okCallBack 确定按钮回调方法,如果回调方法返回值为true，自动关闭提示，否则不能自动关闭，需要手动调用hide方法关闭提示弹窗
 * delay (int) 是否自动关闭 默认不自动关闭，设置delay后自动关闭
 * 返回值 返回弹窗的id，可以通过id关闭对应弹窗
*/

// 提示
Dialog.show = function (type, title, text, delay, okCallBack, cancelCallBack) {
  // 添加元素
  let id = new Date().getTime()
  let icon = ''
  let style = ''
  if (type === 1) {
    style = 'success'
    icon = '<i class="common-tip-icon"></i>'
  } else if (type === 2) {
    style = 'error'
    icon = '<i class="common-tip-icon"></i>'
  } else if (type === 3) {
    style = 'error'
    icon = '<i class="common-tip-icon"></i>'
  }
  let str = ''
  str += '<div class="common-tip-title">' + (title || '') + '<i id="commonTipCloseBtn' + id + '" class="common-tip-close"></i></div>'
  str += '<div class="common-tip-content ' + style + '">' + icon + (text || '') + '</div>'
  if (type === 3) {
    str += '<div class="common-tip-btns">'
    str += '<span id="commonTipOKBtn' + id + '" class="common-tip-btn">确 定</span>'
    str += '<span id="commonTipCancelBtn' + id + '" class="common-tip-btn cancel">取 消</span>'
    str += '</div>'
  } else {
    str += '<div class="common-tip-btns"><span id="commonTipOKBtn' + id + '" class="common-tip-btn center">确 定</span></div>'
  }
  appendDialog(id, str)
  // 绑定事件
  let closeBtn = document.getElementById('commonTipCloseBtn' + id)
  if (closeBtn) {
    closeBtn.onclick = function () {
      callBack(id, cancelCallBack)
    }
  }
  let okBtn = document.getElementById('commonTipOKBtn' + id)
  if (okBtn) {
    okBtn.onclick = function () {
      callBack(id, okCallBack)
    }
  }
  let cancelBtn = document.getElementById('commonTipCancelBtn' + id)
  if (cancelBtn) {
    cancelBtn.onclick = function () {
      callBack(id, cancelCallBack)
    }
  }
  if (typeof delay === 'number' && delay > 0) {
    setTimeout(function () {
      hideDialog(id)
    }, delay)
  }
  return id
}
Dialog.hide = function (id) {
  // 删除元素
  hideDialog(id)
}

function callBack(id, callBack) {
  if (typeof callBack === 'function') {
    if (callBack()) {
      hideDialog(id)
    }
  } else {
    hideDialog(id)
  }
}
function appendDialog(id, str) {
  let ele = document.createElement('div')
  ele.setAttribute('id', 'commonDialogTips' + id)
  ele.setAttribute('class', 'common-dialog-tips')
  ele.innerHTML = str
  let bg = document.createElement('div')
  bg.setAttribute('id', 'commonDialogTipsBg' + id)
  bg.setAttribute('class', 'common-dialog-tips-bg')
  document.body.appendChild(bg)
  document.body.appendChild(ele)
}
function hideDialog(id) {
  let ele = document.getElementById('commonDialogTips' + id)
  let bg = document.getElementById('commonDialogTipsBg' + id)
  if (bg) {
    document.body.removeChild(bg)
  }
  if (ele) {
    document.body.removeChild(ele)
  }
}

export default Dialog
