# Rainier Atlantic Neighborhood

## History
Originally developed to support my graduate thesis in Urban Planning at the University of Washington, "Garlic Gulch: Interpreting the History of Seattle’s Rainier/Atlantic Neighborhood, 1903-2003"

## Demo 
Please visit the current version at https://deansluyter.com/rainieratlantic/

## Thesis
### Excerpt from final thesis, published in August, 2003:

Comparing historical maps is essential in examining the change over time of a neighborhood or region.  In tracing the history of the Rainier/Atlantic district from its genesis as a chiefly Italian enclave to its condition today as a freeway overpass requires detailed examination of plat maps drawn and published by throughout the 20th century by the Kroll and Baist companies of Seattle.  It is customary in contemporary historical analysis to generate “figure/ground” diagrams from these maps, tracing streets and properties in scale from different points in time.  This convention yields a “shadow” view of the study area over time, useful in describing how it grew (or diminished) in density, or changed in street and block layout, over time.  But figure/ground maps cannot, by definition, preserve the often intricate, sometimes beautiful, qualities of the maps themselves; the mapmakers’ art is lost in the interest of clarity.  With the advent of digital media, however, the two can coexist as a cohesive, interactive computer application, combining the visual appeal of original plat maps, vivid historical (and aerial) photographs, and audio clips in a database-driven, web-based application to tell the tale of change in Seattle’s former Garlic Gulch.

A decade ago, the Internet was nothing more than a crude means of sending and receiving text-based information across telephone lines.  Over the last five years, it has become an invaluable entertainment and educational tool, delivering full-motion graphics, animation, and sound with ease over long distances.  The lives of millions around the globe have been affected by the advent of this new, interactive medium, which allows anyone with access to a computer and a phone line to communicate and share information with other individuals and groups the world over.

The Internet’s ability to gather information has also been utilized in the public sector.  Federal, state and local governments have been quick to recognize and harness the power of the Internet for providing information to its constituency.  Several states now offer online voting.  The Internal Revenue Service now accepts some income tax forms completed online.  The use of maps on the Internet is also prevalent.  Online resources such as Expedia and MapQuest in the US, and StreetMap in the UK, offer users the ability to generate maps and driving directions for almost any location imaginable based on simple address information.  Residents of many metropolitan areas can view dynamic maps illustrating traffic and road conditions, often accompanied by near-instantaneous images from live “traffic cams.”  

I have designed an interactive companion to my research that makes use of the Internet's dynamic interactive capabilities.  At the core of the application is a set of scripts coded in Cold Fusion, an language developed in the mid-1990s to facilitate communication between HTML code and SQL-based databases.  JavaScript, is also used throughout the application, to achieve dynamic placement, and therefore movement, of objects on the screen.

The layout of the interface is simple and straightforward:  two aerial images of the neighborhood appear in square frames side-by-side on the screen.  Directly underneath each image is a selection box, which allows the user to choose which two images will be displayed.  At present, the choices are as follows:
1912 Baist map
1928 Kroll map
1936 aerial photograph
1960 aerial photograph
1987 Kroll map
1995 aerial photograph
The map or photograph the user chooses appears in the corresponding frame.

The image on the left features four "directional" buttons, representing north, south, east, and west.  These buttons allow the user to move around within the images, in the directions indicated by the buttons.  When a directional button is clicked, both images move in tandem, facilitating the user's ability to conduct a side-by-side comparison of them.

Below these two framed, movable images is a "guide map," a small-scale, stylized view of the area's extent, showing major roads, bodies of water, etc.  A small, square box is superimposed over this guide map, indicating the section currently in view above.  In addition to using the directional buttons, the user can navigate the neighborhood views by clicking anywhere on the guide map to select a different section to display.
To the right of the aerial views and guide map is an area reserved for descriptive text.  This area displays information pertinent to the particular section currently in view.  Physical landmarks, significant properties, or any other geographic location for which information is available is displayed in the information area as a clickable hypertext link.  If the view rolls his or her mouse over this link, a red dot, designed to resemble a push-pin, appears on both of the framed views in the precise location of the selected item.  When the user clicks the link, the information window displays data specific to the item.  This information may take the form of photographs, descriptive texts, construction/demolition data, and/or links to streaming audio or video content.

The information displayed is stored in a database, which can be appended through this interface as well.  If the user clicks anywhere in the left image frame, a small browser window opens, allowing the user to submit information.  This information is immediately committed to the database, tied to the precise location the user selected.

The Rainier/Atlantic neighborhood interactive tool can be used to ensure that memories of the district are gathered and preserved.  The interface can be used on concert with museum installations, at institutions such as the Museum of History and Industry, the Rainer Valley Historical Society, and History House.  It can also be set up as interactive kiosks at area businesses and public places, such as Mt. Virgin Church, along the lid park's hiking and cycling paths, or in the pedestrian tunnel through Mt. Baker Ridge.

The interface, although designed to assist in interpreting the history of Seattle's Garlic Gulch, is flexible enough for use in a variety of situations.  In order to be truly scalable, two limitations need to be overcome.  One limitation is image size:  the web site loads maps as single, high-resolution images.  This limits potential users to those with broadband internet access, as the images take a very long time to load with slow connections.  Another limitation is the predetermined height and width of the images.  The maps and aerial views in use in this interface measure 2500 x 1500 pixels, which corresponds to the approximate dimensions of the study area.  This limits the size and shape of future potential study areas.  Unlike the virtually unlimited maps available fro such online services as Mapquest (www.mapquest.com) and Expedia (www.expedia.com), the maps in this application are constrained to finite extents.  This limitation can be remedied in future versions by introducing a system of image splicing and re-stitching, which would divide very large images into smaller segments for sequential display.  This would also solve the low-bandwidth limitation:  only the visible portion of each map would be displayed at any given time.