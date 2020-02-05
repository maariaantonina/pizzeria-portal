# Dashboard

- `/`
  - daily statistics of orders (eat-in or takeaway)
  - today list of bookings and events

# Log in

- `/login`
  - login and password buttons
  - submit button (link to dashboard)

# Tables Availability

- `/tables`
  - date and time inpput
  - table of bookings and events
    - column = 1 table
    - row = 30 minute
    - like Google Calendar week view, but instead of days in columns we have tables
    - after clicking booking or event we go to details page
- `/tables/booking/:id`
  - informations about booking
  - enable to edit and save changes
- `/tables/booking/new`
  - enable to create new booking
- `/tables/events/:id`
  - informations about events
  - enable to edit and save changes
- `/tables/events/new`
  - enable to create new event

# Waiter panel

- `/waiter`
  - table
    - rows = tables
    - columns = infomrations (status, time counted from status change)
    - last columns = actions for table
- `/waiter/order/new`
  - table numer (editable)
  - menu
  - product options
  - order (ordered products with options)
  - total price
- `/waiter/order/:id`

# Kitchen panel

- `/kitchen`
  - order list sorted by time
  - contains:
    - table number or takeaway order and informations about dishes
    - button to change status
