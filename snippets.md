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









<label for="addTopic">Select Topic</label>
    <input type="text" class="btn waves-effect waves-light" id="addTopic" name="name">