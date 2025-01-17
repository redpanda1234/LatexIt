# LaTeX It! Changelog

## v0.8.0-unofficial (2021-07-09)

### Added:
- An option to change the resolution of the created images. They will now
  be rendered with a higher resolution by default, leading to sharper results.
- A spinner which is shown during compilation.

### Improved:
- Run compilation as a non-blocking, asynchronous background process. Multiple
  LaTeX expressions are therefore compiled in parallel, and the log will update
  live.
- Prettified the log.
- Reworked exception handling.
- Recreated the extension icon as vector image.
- Restructured and modernized a significant amount of the code to greatly
  improve clarity and maintainability.

### Fixed:
- LaTeX compilation no longer fails if the path to the temporary directory
  contains short/8.3 filenames (Windows only).
- Temporary files are now deleted when closing the message composer.
- Auto detection of latex and dvipng executables no longer succeeds
  unconditionally.
- Various smaller bugs.

### Removed:
- `$$...$$` expressions are no longer converted. `\[...\]` must be used
  instead.


## v0.7.4

- Improvements in the generated .png bitmaps: Transparent background
  (if not set otherwise in LaTeX document) and compression level 3.
- Color of bitmap is now color of surrounding text. (A color specification
  in the the LaTeX file gets always the priority). (Bug #70)
- Layout improvements in configuration dialog.
- Fix issue on Windows that prevented LatexIt! from working unless debug is
  enabled.

## v0.7.3

- Fixed baseline alignment on multiple runs (Bug #64).
- Check for inclusion of "preview" package in LaTeX template (Bug #63).
- Added a do-not-delete note to the template regarding "\usepackage[active]{preview}".
- Added more aggressive error messages for some severe errors.
- Tiny improvements in error messages.
- Added option to keep the temporary files, even after successful LaTeX runs.
- Fix typo in the "Insert Complex Latex" dialog that prevented it from working.

## v0.7.2

- Fix error in the first run dialog
- Mark the addon as incompatible with Thunderbird 78 for now

## v0.7.1

- Fixed the insertion of complex LaTeX (Bug #43).
- Select the insertion marker when opening the insert complex LaTeX dialog.
- Cleaned up the options dialog.
- Replaced place holder __REPLACEME__ with __REPLACE_ME__, which IMHO is easier
  to the eye.
- Added alignment of inserted pictures to the text baseline (Bug #36).
- Added improvements of LaTeXIt! button:
  - Button is disabled for plain text composer windows (Bug #48).
  - Middle click calls 'undo' (Bug #2).
  - Shift+middle click calls 'undo_all'.
- Added context menu to composer window (Bug #49).
- Added LaTeXIt! to the Add-ons menu to access the preferences (Bug #42).
- Removed the configuration item from toolbar and context menues, because they
  are not needed anymore.
- Delete all cached images when the composer window is closed (Bug #44).
- Added autoscaling of images to font size (can be switched off in the
  preferences, where a size can be manually set).
- When inserting a complex LaTeX, the size can either be automatically
  calculated from the surrounding text or set manually.
- Use 'font size' (in px) instead of 'resolution'.
- Check before sending, if a LatexIt! report exists in the message.
- Display an error message, if the place holder "__REPLACE_ME__" cannot be found in the template. (https://github.com/protz/LatexIt/pull/53#discussion_r450431520)
- Added "!!!" in front of error messages.
- Use "\usepackage[utf8x]{inputenc}" instead of "\usepackage[utf8]{inputenc}",
  which should remove the (Debian) dependency of package texlive-latex-extra
  (Bug #8).

## v0.7.0

- Use latex/dvipng instead of latex/dvips/convert to generate the image file.

## v0.6.7

- Fixed the mime type of the embedded image to image/png

## v0.6.6

- Adding suggestions from trying to sign add-on through Mozilla
- Update URL points to github
- remove manifest.json from xpi, that shouldn't have been there

## v0.6.5

- Support for TB60+

## v0.6-dev

- Add PATH hacks for Thunderbird on OSX
- Add suggestions explaining why the process might fail.
- Better error reporting.
- Don't choke on malformed paths.
- Add a "load default template" button for the "insert complex latex dialog"
- Add a "show debug information" option for people who are having trouble
getting things to work properly
- Make the paths in the options editable for mac users who cannot navigate to
the place where the binaries are located
