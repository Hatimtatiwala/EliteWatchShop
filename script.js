// NavBar Component with Placeholder Logo
function NavBar() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "logo" }, /*#__PURE__*/
    React.createElement("img", {
      src: "https://via.placeholder.com/24",
      alt: "Logo",
      style: { width: '24px', marginRight: '8px', verticalAlign: 'middle' } }), "MyTube"), /*#__PURE__*/



    React.createElement("input", { type: "text", placeholder: "Search...", className: "search-bar" }), /*#__PURE__*/
    React.createElement("div", { className: "user-actions" }, /*#__PURE__*/
    React.createElement("span", null, "\uD83D\uDD14"), /*#__PURE__*/
    React.createElement("span", null, "\uD83D\uDCC1"), /*#__PURE__*/
    React.createElement("span", null, "\uD83D\uDC64"))));



}

// VideoActions Component
function VideoActions() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "video-actions" }, /*#__PURE__*/
    React.createElement("button", { className: "action-button" }, /*#__PURE__*/
    React.createElement("i", { className: "fas fa-thumbs-up" }), " 9.8K"), /*#__PURE__*/

    React.createElement("button", { className: "action-button" }, /*#__PURE__*/
    React.createElement("i", { className: "fas fa-thumbs-down" })), /*#__PURE__*/

    React.createElement("span", { className: "divider" }, "|"), /*#__PURE__*/
    React.createElement("button", { className: "action-button" }, /*#__PURE__*/
    React.createElement("i", { className: "fas fa-share" }), " Share"), /*#__PURE__*/

    React.createElement("button", { className: "action-button" }, /*#__PURE__*/
    React.createElement("i", { className: "fas fa-ellipsis-h" }))));



}

// VideoPlayer Component
function VideoPlayer({ title, channel, views, timestamp, videoUrl }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "video-player-page" }, /*#__PURE__*/
    React.createElement("div", { className: "video-player" }, /*#__PURE__*/
    React.createElement("iframe", {
      width: "100%",
      height: "450",
      src: videoUrl,
      title: title,
      frameBorder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true })), /*#__PURE__*/


    React.createElement("div", { className: "video-details" }, /*#__PURE__*/
    React.createElement("h2", null, title), /*#__PURE__*/
    React.createElement("p", null, views, " views \u2022 ", timestamp), /*#__PURE__*/
    React.createElement("p", null, channel), /*#__PURE__*/
    React.createElement(VideoActions, null), " ")));



}

// VideoCard Component
function VideoCard({ title, channel, views, timestamp, thumbnail, videoUrl }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "video-card" }, /*#__PURE__*/
    React.createElement("a", { href: videoUrl, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("div", {
      className: "video-thumbnail",
      style: { backgroundImage: `url(${thumbnail})` } })), /*#__PURE__*/


    React.createElement("div", { className: "video-info" }, /*#__PURE__*/
    React.createElement("h4", null, title), /*#__PURE__*/
    React.createElement("p", null, channel), /*#__PURE__*/
    React.createElement("p", null, views, " views \u2022 ", timestamp))));



}

// Sample Video Data with Updated Thumbnails
const videoData = [
{
  title: "Sample Video 1",
  channel: "Channel 1",
  views: "1M",
  timestamp: "2 days ago",
  thumbnail: "https://imagizer.imageshack.com/img923/8040/Zkdnos.png",
  videoUrl: "https://www.youtube.com/embed/91pEPGXOFqI" },

{
  title: "Sample Video 2",
  channel: "Channel 2",
  views: "500K",
  timestamp: "5 days ago",
  thumbnail: "https://imagizer.imageshack.com/img922/3186/4T7J4t.png",
  videoUrl: "https://www.w3schools.com/html/movie.mp4" },

{
  title: "Sample Video 3",
  channel: "Channel 3",
  views: "2M",
  timestamp: "1 week ago",
  thumbnail: "https://imagizer.imageshack.com/img923/6909/2qVOZ5.png",
  videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }];



// App Component
function App() {
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement(NavBar, null), /*#__PURE__*/
    React.createElement("div", { className: "main-content" }, /*#__PURE__*/
    React.createElement("h1", null, "Recommended"), /*#__PURE__*/
    React.createElement("div", { className: "video-grid" },
    videoData.map((video, index) => /*#__PURE__*/
    React.createElement(VideoCard, {
      key: index,
      title: video.title,
      channel: video.channel,
      views: video.views,
      timestamp: video.timestamp,
      thumbnail: video.thumbnail,
      videoUrl: video.videoUrl }))))));






}

// Render the App component to the DOM
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));