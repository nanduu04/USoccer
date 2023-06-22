# Coding Guidelines

# General

- Any common functionality should be factored out into a separate file that can be imported into other files needing that functionality.
- All functions, properties, and local variables should have descriptive names (camel case, ex. findAllNearbyContractors).
- All constant variables should be uppercase with words separated by _(ex. String API_KEY)
- All functions, except ones that generate front end elements (ex. widgets), should have a comment block above them that describe what that function does.
- There should be enough and consistent spacing between functions in a file for code readability.

# Python/Django

- All functions that are need to be used multiple times in [view.py](http://view.py) should be factored out into view_helpers.py

# Dart/Flutter

- All common widgets should be put under lib/src/widgets/
- There should be one API class (per API type) that is a static class and handles all API calls. For example BookTradesAPI will be one class, and if we use Google APIs, GoogleAPI will be another class. These classes should go under lib/src/apis/
- The same font style should be used across the app
- All common properties, fonts, colours, etc. should be placed in lib/src/constants.dart