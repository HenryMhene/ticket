
# Event Management

## Overview

🎉 In our Angular application, we manage events through a combination of models, components, and services. The `Event` model represents the data structure of an event, the `EventService` handles the business logic, and the `EventComponent` and `EventListComponent` handle the user interface.

## Event Model

📝 The `Event` model is a TypeScript class that defines the structure of an event object. It includes properties such as `eventID`, `eventName`, `description`, `startDateTime`, `endDateTime`, and others. This model is used throughout the application to type-check the data we're working with and ensure it matches the structure we expect.

## Event Service

🔧 The `EventService` is an Angular service that handles the business logic related to events. It uses the `ApiService` to send HTTP requests to our backend API.

The `EventService` has methods for getting all events (`getEvents`), creating a new event (`createEvent`), updating an existing event (`updateEvent`), and deleting an event (`deleteEvent`). These methods send GET, POST, PUT, and DELETE requests to the API, respectively.

When creating a new event, the `createEvent` method generates a new `EventID` if one isn't provided.

## Event Component

🖥️ The `EventComponent` is an Angular component that provides the user interface for viewing and managing a single event. It uses the `EventService` to interact with the API and get the data it needs.

When the `EventComponent` is initialized, it calls the `getEvents` method of the `EventService` to get the data for the event it should display.

## Event List Component

📋 The `EventListComponent` is an Angular component that provides the user interface for viewing a list of all events. Like the `EventComponent`, it uses the `EventService` to interact with the API.

When the `EventListComponent` is initialized, it calls the `getEvents` method of the `EventService` to get the data for all events.

## API Service

🌐 The `ApiService` is an Angular service that provides a generic interface for interacting with any API. It has methods for sending GET, POST, PUT, and DELETE requests.

The `EventService` uses the `ApiService` to send requests to the specific API endpoints related to events.

## Conclusion

🎯 In summary, the `Event` model, `EventService`, `EventComponent`, and `EventListComponent` work together to provide a complete solution for managing events in our Angular application. The `EventService` acts as a bridge between the components and the API, using the `ApiService` to send HTTP requests and the `Event` model to structure the data.
