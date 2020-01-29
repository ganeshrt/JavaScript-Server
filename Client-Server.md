# Clinet-Server Model

when the client computer sends a request for data to the server through the internet, the server accepts the requested, process it and deliver the data packets requested back to the client. Server computer has the potential to manage numerous clients at the same time and also, single client can connect to numerous servers at a single timestamp, where each server provides a different set of services to that specific client.

![](http://bpastudio.csudh.edu/fac/lpress/471/hout/netech/ClServer.gif)

When user enter a URL and hit enter, the client encloses it in a Get message which it sends across the network to a Web server. If the document is on that Web server, it sends it back to the client. If not, it sends an error message (formatted as a Web page). When the client receives the page (pr error message), it formats and displays it.

  1.the user enters a URL and hits enter
  2.the client program sends a Get message containing the URL to the waiting server
  3.if the server has the requested document, it sends it back to the client
  4.if the server does not have the document, it sends an error message back to the client
  5.the client displays whatever was returned
  6.the server waits for the next request


