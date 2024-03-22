# Ticket

# Events

EventID (Primary Key):

A unique identifier for each event.
EventName:

The name or title of the event.
Description:

A brief description or details about the event.
StartDateTime:

The date and time when the event starts.
EndDateTime:

The date and time when the event ends.
VenueID (Foreign Key):

A reference to the Venue where the event takes place.
OrganizerUserID (Foreign Key):

The UserID of the user organizing or hosting the event.
Categories:

A list or reference to the categories or genres associated with the event.
Tags:

Additional keywords or tags associated with the event for better searchability.
ImageURL:

A URL pointing to an image or poster representing the event.
Capacity:

The maximum number of attendees or seats available for the event.
TicketTypes:

A list or reference to the different types of tickets available for the event.
SalesStartDate:

The date and time when ticket sales for the event begin.
SalesEndDate:

The date and time when ticket sales for the event end.
Status:

The status of the event (e.g., upcoming, ongoing, completed).
ExternalLinks:

Links to external websites or resources related to the event.
CreatedDateTime:

The date and time when the event record was created.
LastUpdatedDateTime:

The date and time when the event record was last updated.

# EndPoints

REST API endpoint: https://lk2dwt8fpa.execute-api.ap-southeast-2.amazonaws.com/dev

# DynamoDb Schema

DynamoDB is a NoSQL database, so the schema design is quite different from traditional relational databases. Here's a simplified DynamoDB-compatible schema for an online event ticketing system:

Users Table:

Partition Key: UserID
Attributes:
Username
Email
Password
FirstName
LastName
Phone
Address
UserType
Events Table:

Partition Key: EventID
Attributes:
EventName
Description
StartDateTime
EndDateTime
VenueID
OrganizerUserID
Venues Table:

Partition Key: VenueID
Attributes:
VenueName
Address
City
State
ZipCode
Capacity
Amenities
EventCategories Table:

Partition Key: CategoryID
Attributes:
CategoryName
EventCategoryMapping Table:

Partition Key: EventID
Sort Key: CategoryID
Tickets Table:

Partition Key: TicketID
Attributes:
EventID
TicketType
Price
QuantityAvailable
SaleStartDateTime
SaleEndDateTime
Orders Table:

Partition Key: OrderID
Attributes:
UserID
OrderDateTime
TotalAmount
PaymentStatus
OrderDetails Table:

Partition Key: OrderID
Sort Key: TicketID
Attributes:
Quantity
SubtotalAmount
Payments Table:

Partition Key: PaymentID
Attributes:
OrderID
PaymentDateTime
PaymentAmount
PaymentMethod
TransactionID
In DynamoDB, you typically model your data based on access patterns, and the choice of partition and sort keys is crucial. Ensure that you design your tables to support the queries your application will perform. Additionally, consider using Global Secondary Indexes (GSIs) if you need alternative query patterns. This schema is a starting point, and you may need to adjust it based on your specific use case and access patterns.

# Database Schema

 An advanced schema would consider more features and relationships to provide a more comprehensive representation of an online event ticketing system. Here's an extended version:

Users Table:

UserID (Primary Key)
Username
Email
Password
FirstName
LastName
Phone
Address
UserType (e.g., regular user, admin)
Events Table:

EventID (Primary Key)
EventName
Description
StartDateTime
EndDateTime
VenueID (Foreign Key referencing Venues)
OrganizerUserID (Foreign Key referencing Users)
Venues Table:

VenueID (Primary Key)
VenueName
Address
City
State
ZipCode
Capacity
Amenities (e.g., parking, WiFi)
EventCategories Table:

CategoryID (Primary Key)
CategoryName
EventCategoryMapping Table:

EventCategoryMappingID (Primary Key)
EventID (Foreign Key referencing Events)
CategoryID (Foreign Key referencing EventCategories)
Tickets Table:

TicketID (Primary Key)
EventID (Foreign Key referencing Events)
TicketType
Price
QuantityAvailable
SaleStartDateTime
SaleEndDateTime
Orders Table:

OrderID (Primary Key)
UserID (Foreign Key referencing Users)
OrderDateTime
TotalAmount
PaymentStatus (e.g., pending, completed)
OrderDetails Table:

OrderDetailID (Primary Key)
OrderID (Foreign Key referencing Orders)
TicketID (Foreign Key referencing Tickets)
Quantity
SubtotalAmount
Payments Table:

PaymentID (Primary Key)
OrderID (Foreign Key referencing Orders)
PaymentDateTime
PaymentAmount
PaymentMethod
TransactionID
This advanced schema includes features like user roles, event categories, venue amenities, and payment details. Adjustments can still be made based on specific business requirements and additional features needed in the ticketing system. Indexes, constraints, and normalization considerations should also be applied as necessary for optimal performance and data integrity.

# Some Notes

As a general principle, you should never build a schema that involves adding/removing tables at run time. The relationship you're looking for between customers and events is many-to-many, which in MySQL would use a junction table. An example schema would look like this:

customer -
customer_id (primary key)
email, name, etc.

event - 
event_id (primary key)
name, time, etc.

ticket -
ticket_id (primary key)
customer_id (index)
event_id (index)
date_purchased, etc.
Rules like "each customer is only allowed 4 tickets" should be implemented at a code level rather than a schema level since that is subject to change and your schema should be flexible enough to accommodate that change, tempting as it may be to have four columns in the customers table for the four tickets.

To get the events that customer ID 1 is attending:

SELECT DISTINCT event.*
FROM ticket
LEFT JOIN event ON ticket.event_id = event.event_id
WHERE ticket.customer_id = 1
To get the customers attending event ID 1:

SELECT DISTINCT customer.*
FROM ticket
LEFT JOIN customer ON ticket.customer_id = customer.customer_id
WHERE ticket.event_id = 1
A common format for junction tables is to combine the two table names, as in event_customer, but in this case calling it ticket makes more sense, since you might be including additional information about the ticket purchase in that table.
