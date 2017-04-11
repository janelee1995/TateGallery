- Awaiting result

# TateGallery
Final year assignment using Node.js and mongoDB. Assignment involved recreating the Tate Gallery website to show an aesthetically pleasing view. 3 pieces of functionality were needed for the assignment, however this site includes 4 features which include:

1. Interactive Theme Picker
2. Random Image generator 
3. Image Filters
4. Search Feature


# Application Overview
The application is split into two sections, the explore section and the gallery section. The explore section loads 8 random images and displays them to the user, then allows the user to click one of the images and load the information associated with it along with the functionality to apply filters. The gallery section allows users to search artists by name and see the artworks associated with them. In addition to this, the filters and artwork information can also be seen by clicking on the image. The application also allows the users to pick between 5 different themes which switch the colours the site is shown in.

[![Screen Shot 2017-04-09 at 13.35.00.png](https://s13.postimg.org/5gfnps2o7/Screen_Shot_2017-04-09_at_13.35.00.png)](https://postimg.org/image/nw04n6gsj/)
[![Screen Shot 2017-04-09 at 13.53.53.png](https://s17.postimg.org/j9hsm6din/Screen_Shot_2017-04-09_at_13.53.53.png)](https://postimg.org/image/su1f922uj/)


# Interactive Theme Picker
The web application allows the user to select from 5 different themes. These themes will change the colour scheme of the application. Many of the colour schemes I have chosen were selected from pallets found on Adobe Kuler, which is an internet application from Adobe Systems that lets individuals try out, create and save various colour schemes. The reason for this is that it provides users with colour schemes that compliment each other, which will make the application more visually appealing. I had previously considered allowing users to select their own colours to display on the application, but decided that was not a good idea as it had the potential to make the site visually unappealing depending on the colours chosen. This feature was implemented using jQuery and CSS.

Theme 1 - Main theme of application
The main theme of the application has a dark feel to it, which I think complements the artwork.

[![Screen Shot 2017-04-09 at 14.02.10.png](https://s24.postimg.org/jw69q7gfp/Screen_Shot_2017-04-09_at_14.02.10.png)](https://postimg.org/image/qmmqzn3ld/)


The second theme has more variety with regard to colour, however the colours chosen are still quite dark.

[![Screen Shot 2017-04-09 at 14.02.15.png](https://s27.postimg.org/c9cmw2mdv/Screen_Shot_2017-04-09_at_14.02.15.png)](https://postimg.org/image/rutyg0ybz/)

Theme 3 focuses more on green and brown, but introduces more brighter tones as opposed to the previous themes which consist of darker tones.

[![Screen Shot 2017-04-09 at 14.02.22.png](https://s4.postimg.org/t102zay59/Screen_Shot_2017-04-09_at_14.02.22.png)](https://postimg.org/image/gz4p55owp/)

Theme 4 introduces bright tones to the application, some of which have a pastel feel. This theme was important for the application as I wanted to introduce a variety of themes, both bright and dark with a range of colours.

[![Screen Shot 2017-04-09 at 14.02.27.png](https://s16.postimg.org/f6hldh4rp/Screen_Shot_2017-04-09_at_14.02.27.png)](https://postimg.org/image/tcxc8pfmp/)

Theme 5 is a black and white theme, all images and filters are shown accordingly.

[![Screen Shot 2017-04-09 at 14.02.31.png](https://s18.postimg.org/qvmo8bujt/Screen_Shot_2017-04-09_at_14.02.31.png)](https://postimg.org/image/yodc0b0it/)


# Random Image Generator
One of the ways in which I chose to display the artworks in the database was to get 8 random images and display them to the user. As the database is quite large (60,000+ documents) I thought this would be a good way to allow users to see more of the content available, as opposed to scrolling through artworks in a sequential list. This feature proved to be challenging as I wanted 8 completely random, non-sequential images, as opposed to 8 sequential images chosen from the database. The solution to this was to count the number of documents in the collection, pull 6000 sequential documents from the database (random group of documents) and then find 8 random documents from this list. Following this, I pushed these documents to an array, which was then used to display the images on the screen. A problem I encountered from this was that every 3 or 4 refreshes of the page, the images would come up undefined, which I suspect was from the sheer volume of documents which were being pulled from the database. In order to fix this I simply ran a check in order to see if the images chosen were undefined, and adjusted the array accordingly. An example of the random images can be seen below.

[![Screen Shot 2017-04-09 at 14.08.55.png](https://s1.postimg.org/54cc0jlen/Screen_Shot_2017-04-09_at_14.08.55.png)](https://postimg.org/image/54cc0jlej/)

# Image Filters
Another feature which I implemented in order to make the site more interesting and visually appealing was the use of filters. This was achieved using CSS, and jQuery in order to switch the filters both randomly and by choice. In order to display the filters, along with the main image selected by the user, Ajax was used. The reason I chose Ajax was to render the content without refreshing the page, allowing a more enjoyable experience for the user by providing a smooth transition and flow to the application. An example of the filters can be seen below, which include blur, hue, invert, saturate, greyscale (black and white), opacity, and sepia filters. Upon clicking one of the filters on the right, the main image on the left will change. However the image behind it will remain the same, with a blurred effect, in order to show the contrast between the images. The button on the top left will randomise the filters and apply them to both the main image and the secondary image.

[![Screen Shot 2017-04-09 at 13.53.53.png](https://s17.postimg.org/j9hsm6din/Screen_Shot_2017-04-09_at_13.53.53.png)](https://postimg.org/image/su1f922uj/)

# Search Feature
The final feature of the application is a search feature which allows users to search for artists by name and show the artworks associated with them. I felt this feature was needed as there is a lot of content available in the database and a search feature would be useful. This feature works by taking a string from a search box and then searching the database accordingly. The images associated with the search query are then shown to the user. The filters can also be seen if the user clicks on one of the rendered images (similar to the explore section). The search is implemented using Node.js and Mongoose in order to query the database. Ajax was then used in order to display the information on the page without the need to refresh the page.

[![Screen Shot 2017-04-09 at 14.14.58.png](https://s3.postimg.org/aay7gbj4j/Screen_Shot_2017-04-09_at_14.14.58.png)](https://postimg.org/image/cfikhekr3/)
