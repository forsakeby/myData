// 请注意此 Web API 的兼容性，
// 不支持 IE, iOS Safari < 10.1，
// 完整支持列表参考：https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
fetch('https://v1.hitokoto.cn/?c=h')
  .then(response => response.json())
  .then(data => {
    const hitokoto = document.querySelector('#hitokoto_text')
    hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
    hitokoto.innerHTML = '“'+data.hitokoto+'”'+"</br>" + " <div style='text-align: right; '>"+"——"+"「 "+data.from+"」"+"</div>"
  })
  .catch(console.error)