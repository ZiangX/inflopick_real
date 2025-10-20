# Folder Completion Checklist

Use this checklist to verify each UI folder is fully completed before moving to the next.

---

## Pre-Start Checklist

Before starting work on a folder:

- [ ] Folder name confirmed: `_______________________`
- [ ] New Claude Code thread created
- [ ] Prompt template copied from `PROMPT_TEMPLATE.md`
- [ ] `[FOLDER_NAME]` replaced with actual folder name
- [ ] Workflow reference available: `NAVIGATION_FIX_WORKFLOW.md`

---

## Phase 1: Discovery ✅

- [ ] All HTML files discovered (count: `____`)
- [ ] File list saved or documented
- [ ] Folder structure analyzed
- [ ] File depth map created
- [ ] Navigation patterns identified

**Verification**: Run `find [FOLDER_NAME] -name "*.html" | wc -l` and confirm count

---

## Phase 2: Mapping ✅

- [ ] Navigation reference map created
- [ ] Common navigation elements documented
- [ ] File depth reference completed
- [ ] Navigation targets identified
- [ ] Special navigation patterns noted

**Verification**: `navigation_map.md` exists and is complete

---

## Phase 3: Navigation Fixes ✅

- [ ] Header navigation fixed (all files)
- [ ] Main navigation tabs fixed (all files)
- [ ] Footer links fixed (all files with footers)
- [ ] Card navigation fixed (buttons → links)
- [ ] Mobile navigation fixed (if present)
- [ ] Logo links fixed
- [ ] All relative paths verified

**Verification**: Manually check 3 random files for correct paths

---

## Phase 4: Testing ✅

- [ ] Playwright installed (`package.json` exists)
- [ ] Test suite created (`validate_navigation.spec.js`)
- [ ] Tests include:
  - [ ] Header navigation test
  - [ ] Main navigation test
  - [ ] Footer links test
  - [ ] Card navigation test
  - [ ] Navigation flow test
  - [ ] Broken links test
  - [ ] Consistency test

**Test Results**:
- Total tests: `____`
- Passing: `____`
- Failing: `____`
- **Pass rate: _____%** (must be 100%)

**Verification**: Run `npx playwright test --reporter=list`

---

## Phase 5: Documentation ✅

- [ ] `NAVIGATION_FLOW.md` created
- [ ] Navigation matrix completed
- [ ] `NAVIGATION_FIX_SUMMARY.md` created
- [ ] Statistics documented
- [ ] Changes listed
- [ ] Known limitations noted (if any)

**Verification**: All 3 documentation files exist and are complete

---

## Phase 6: Cleanup ✅

- [ ] Temporary files removed:
  - [ ] `analyze_structure.js` deleted
  - [ ] `html_files_list.txt` deleted
  - [ ] Other temp files removed

- [ ] Files kept:
  - [ ] `navigation_map.md` ✓
  - [ ] `NAVIGATION_FLOW.md` ✓
  - [ ] `NAVIGATION_FIX_SUMMARY.md` ✓
  - [ ] `validate_navigation.spec.js` ✓
  - [ ] `package.json` ✓

**Verification**: Check folder contents

---

## Final Verification ✅

### Manual Browser Testing

Test in browser (3-5 key pages):

**Page 1**: `_______________________`
- [ ] Header icons work
- [ ] Main tabs work
- [ ] Footer links work
- [ ] No console errors

**Page 2**: `_______________________`
- [ ] Header icons work
- [ ] Main tabs work
- [ ] Cards/buttons work
- [ ] No console errors

**Page 3**: `_______________________`
- [ ] Navigation flow works
- [ ] All links functional
- [ ] No console errors

### Cross-Page Navigation Flow

- [ ] Home → Profile → Cart → back to Home
- [ ] Click through all main tabs
- [ ] Test footer links from different pages
- [ ] Mobile navigation (if present)

### Quality Checks

- [ ] No `href="#"` placeholders (except intentional)
- [ ] No `undefined` or `null` in hrefs
- [ ] No broken relative paths
- [ ] Consistent navigation across all pages
- [ ] All buttons converted to links (where appropriate)

---

## Sign-Off Checklist ✅

Before marking folder as complete:

- [ ] **100% test pass rate** confirmed
- [ ] **All HTML files processed** (none missed)
- [ ] **Manual verification passed** (browser testing)
- [ ] **Documentation complete** (3 files created)
- [ ] **No console errors** during testing
- [ ] **Cleanup completed** (temp files removed)
- [ ] **Summary reviewed** and accurate

**Folder Status**: ⬜ In Progress | ⬜ Complete

---

## Completion Summary

**Folder**: `_______________________`
**Date Completed**: `_______________________`
**Total Files Processed**: `_______________________`
**Test Pass Rate**: `_______________________`
**Time Taken**: `_______________________`

**Notes**:
```
[Any special notes, challenges, or observations]
```

**Ready for Next Folder**: ⬜ Yes | ⬜ No (specify reason): `_____________`

---

## Multi-Folder Tracking

| Folder Name | Status | HTML Files | Tests Pass | Date Complete |
|-------------|--------|------------|------------|---------------|
| Buyer       | ✅ Complete | 17 | 8/8 (100%) | [date] |
| Seller      | ⬜ Pending | - | - | - |
| Creator     | ⬜ Pending | - | - | - |
| Admin       | ⬜ Pending | - | - | - |
| [Other]     | ⬜ Pending | - | - | - |

---

## Common Issues & Solutions

### Issue: Tests Failing After Fixes
**Solution**:
1. Check test output for specific error
2. Verify relative path depth calculation
3. Ensure file names match exactly (case-sensitive)
4. Re-run individual test to isolate issue

### Issue: HTML Files Missed
**Solution**:
1. Re-run `find [FOLDER] -name "*.html"`
2. Check for nested directories
3. Look for unconventional file locations
4. Verify no files in `.gitignore` or `node_modules`

### Issue: Navigation Inconsistent
**Solution**:
1. Review navigation_map.md
2. Identify "template" page with best structure
3. Apply same structure to all pages
4. Adjust only relative paths based on depth

### Issue: Buttons Not Converting to Links
**Solution**:
1. Search for `<button>` with navigation text
2. Replace with `<a href="..." class="button-classes">`
3. Ensure styling preserved with classes
4. Test click behavior in browser

---

## Notes

- Work on **one folder at a time** - complete fully before starting next
- **Don't skip manual verification** - automated tests don't catch everything
- **Document unusual patterns** - helps with future folders
- **Keep consistent structure** - makes cross-folder comparison easier
