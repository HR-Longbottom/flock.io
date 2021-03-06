## Flock.IO

## Team 
Michael Harfenist and Jonah Cost - Project Manager <br></br>
James Tsui and Eric Ma - Architecture Owner  <br></br>
Christopher Hsu and Art Taphanand - UI Owner


## Description of App
Flock.IO is a full stack application in which users can come together and plan trips, book flights and communicate through a live chat. A user can log in using their google account, is then taken to the Landing Page in which the user can view their personal upcoming flights, their personal groups, and create a group. There is a sidebar in which a user can maneuver through the pages with ease. 
##### Landing Page
![Landing-Page](https://github.com/HR-Longbottom/flock.io/blob/master/client/assets/LandingPageFLock.png?raw=true)

### About Group page
Each group that is created now hosts a Group Page. The group page has an admin designated by who created the group. The admin can add members, choose the arrival destination, and delete the group. All members can choose a flight which the outcoming and incoming destinations are pre-filled based on previously inputted preffered airport and arrival destination. Members can also add to a bulletin board, which works as a bulliten board in the sense all members in the group can view the posted messages. When members are added, all users in the group can view their friends flight plans. 

##### Group Page
![Group-Page](https://github.com/HR-Longbottom/flock.io/blob/master/client/assets/Group%20Page%20Flock.png?raw=true)

### About Chats
The Chat Section works as a live chat, built with firebase-cloud messaging. Users can go into their group chat, which consists of all members in a group. Users can easily transfer from group to group via the constant sidebar list of groups allowing for quick access to other group chats.   

##### Chat Page 
![Chats](https://github.com/HR-Longbottom/flock.io/blob/master/client/assets/chat%20Actual%20flock.png?raw=true)

# How to use
#### Install dependencies
  - ### run npm install
#### Initialize the webpack 
  - ### run npm run build-dev
#### Retrive Tokens from Amadeus 
 -  ### Sign up for an account at https://developers.amadeus.com/
 -  ### Login to your account and create a new app under My Self-Service Workspace
 -  ### Click into the newly created app to get the API key and API secret of the application
 -  ### Create a post request to https://test.api.amadeus.com/v1/security/oauth2/token with the body of request be encoded as x-www-form-urlencoded
 -  ### Add the parameters as following
 ![Parameters](https://github.com/HR-Longbottom/flock.io/blob/master/client/assets/amadeus%20access%20token.PNG)
 -  ### Take the access token in the response and attach it to the 'Authorization' header as 'Bearer token'.
#### Run the server locally 
 - ### run npm run start
