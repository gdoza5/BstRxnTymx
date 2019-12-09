let user = require('../models/user')

user.teams.forEach(function(team) { 
    team.athletes.forEach(funtion(athlete) {
        athlete.name
    })
}) 

<% }) %>
      </tbody>
        <tbody>
        <% user.teams.forEach(function(team) { %>
          <tr value="<%= team._id %>">
          <% team.athletes.forEach(funtion(athlete) { %>
          <ul>
            <li><%= athlete.avatar %>,<%= athlete.name %>,<%= athlete.age%>,</li>
          </ul>

          <% }) %>
        </tr>

User.findOne({googleId:}, function