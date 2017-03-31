 <template>
  <div id="wrapper">
    <!-- header -->
    <div id="header">
      <a id="yc" href="http://www.ycombinator.com">
        <img src="https://news.ycombinator.com/y18.gif">
      </a>
      <h1><a href="#/">Hacker News</a></h1>
      <span class="source">
        Built with <a href="http://vuejs.org" target="_blank">Vue.js</a> |
        <a href="https://github.com/yyx990803/vue-hackernews" target="_blank">Source</a>
      </span>
    </div>
    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<style>
html, body{
  font-family:Verdana;
  font-size:13px;
  height:100%;
}
  
ul{
  list-style-type:none;
  padding:0;
  margin:0;
}
  
a{
  color:#000;
  cursor:pointer;
  text-decoration:none;
}
  
  
#wrapper{
  background-color:#f6f6ef;
  position:relative;
  width:85%;
  min-height:80px;
  margin:0 auto;
}
  
#header{
  background-color:#f60;
  height:24px;
  position:relative;
}
  
#header h1{
  font-weight:bold;
    font-size :13px;
    display :inline-block;
    vertical-align :middle;
    margin :0;
}
    
 #header .source{
  color :#fff;
    font-size :11px;
    position :absolute;
    top :4px;
    right:4px;
 }
    
  #header .source a{
   color:#fff;
  }
  #header .source a:hover {
    text-decoration:underline;
  }
      
#yc {
  border:1px solid #fff;
  margin:2px;
  display:inline-block;
  vertical-align:middle;
}
  
 #yc img {
   vertical-align:middle;
 }
   
.view {
  position:absolute;
  background-color:#f6f6ef;
  width: 100%;
  box-sizing:border-box;
  padding:8px 20px;
}

@media screen and (max-width: 700px) {
  html, body {
    margin:0;
  }
    
  #wrapper{
    width:100%;
  }
}
  
</style>