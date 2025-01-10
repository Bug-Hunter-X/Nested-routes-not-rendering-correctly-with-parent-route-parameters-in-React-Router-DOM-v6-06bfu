# React Router DOM v6 Nested Route Rendering Issue

This repository demonstrates a bug in React Router DOM v6 where nested routes fail to render correctly when a parent route includes parameters.  The issue occurs when attempting to access parent route parameters within a nested route component.

## Problem Description

The `User` component, nested within a route that uses parameters (`/users/:userId`), doesn't render as expected.  This only happens when a parent route with parameters exists.  If the `/users/:userId` route is the only route defined, it works correctly.

## Solution

The solution involves using the `useParams` hook correctly to access parameters from parent routes and utilizing the `Outlet` component to render nested routes effectively within the parent route's context.

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the development server.
5. Observe that the nested route (/users/:userId/profile) does not render correctly. Following the solution will resolve the issue.