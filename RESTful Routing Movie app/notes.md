   <% if (currentUser === campground.author.username ){ %>
   <% } %>

                           <% if (currentUser.username === campground.author.username ){ %>
                            <div class='text-left'>
                                <a class='btn btn-warning' href='/campgrounds/<%= campground._id %>/edit'>Edit Campground</a>
                            </div>
                            <% } %>

    <p>
        <% if (currentUser && currentUser.username === campground.author.username ){ %>
            <div class='text-left'>
                <a class='btn btn-warning' href='/campgrounds/<%= campground._id %>/edit'>Edit Campground</a>
            </div>
            <% } %>

    </p>
    <p>Current User:
        <%=currentUser.username%>
    </p>
    <p>Campground user
        <%= campground.author.username %>
    </p>

<% if(currentUser && comment.author.id.equals(currentUser._id)){ %>-->
    <% if (currentUser && currentUser.username === campground.author.username ){ %>
            <% } %>

            <% if (currentUser && currentUser.username === campground.author.username ){ %>

            <% } %>

<a class='btn btn-warning text' href='/campgrounds/<%= campground._id %>/comments/<%=comment._id %>/edit'>Edit</a>
<a class="btn btn-warning text" href="/campgrounds/<%=campground._id %>/comments/<%=comment._id %>/edit">Edit</a>