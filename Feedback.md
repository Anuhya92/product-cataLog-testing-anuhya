# Feedback on the Test Suite

**Overall impression:** The GitHub repository was well structured and
provided clear test cases, which made it easy to understand the expected
functionality. The test cases were helpful as a guide for building the
components and validating the implementation. Overall, it was a good
foundation for developing and testing the application.

**What could be improved:**
- A few tests mixed unit and integration styles in the same file without
  labeling which was which (e.g. some component tests rendered the full
  `<Home />` page instead of the component in isolation).
- Coverage mostly tested single-item scenarios (0 or 1 favorite) — adding
  a second item would have caught state bugs like overwriting instead of
  appending.

**What i added:** 
extra tests for footer 