<!-- Modal implementation of topic card. -->
<%- include('../partials/header') %>

<h1>Here are all of your topics</h1>
<div class="container">
  <div class="row">
    <% topics.forEach((topic, idx) => { %>

    <div class="card small col s4 modal-trigger" id="topic-card">
      <div class="card-content col-content">
        <%= topic.name %>
      </div>
      <a class="btn modal-trigger" href="#modal<%=idx%>">Expand Topic</a>
    </div>

    <div id="modal<%=idx%>" class="modal">
      <div class="modal-content">
        <h4><%= topic.name%></h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
      </div>
    </div>


    <% }) %>
  </div>
  

</div>

<%- include('../partials/footer') %>




// <!-- 
// <% if(!topic.contents) {%>
//   <form action="/users/<%=user.id%>/topics/<%=topicId%>/contents" method="POST">

//     <label for="addContentName">Add Name</label>
//     <input type="text" name="name" id="addContentName" value="add content name">
//     <label for="addContentLink">Content Link</label>
//     <input type="text" name="name" id="addContentLink" value="add content link"> -->
//     <div class="input-field col s12">
//       <select multiple>
//         <option value="book">Book</option>
//         <option value="video">Video</option>
//         <option value="article">Article</option>
//         <option value="online course">Online Course</option>
//       </select>
//     </div>


//     <button type="submit" class="btn">Submit</button>
//   </form>
//   <%}%> -->