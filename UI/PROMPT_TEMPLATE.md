# Navigation Fix Prompt Template

Copy this prompt into a new Claude Code thread to systematically fix navigation in any UI folder.

---

## PROMPT TO COPY:

```
I need you to systematically fix all navigation links and interconnections for the HTML pages in the [FOLDER_NAME] folder, following this workflow:

## Requirements

1. **Discover ALL HTML files** in [FOLDER_NAME] - ensure no file is missed
2. **Analyze folder structure** and calculate correct relative path depths for each file
3. **Fix all navigation elements**:
   - Header navigation icons/links
   - Main navigation tabs
   - Footer quick links
   - Card-based navigation (convert buttons to links where appropriate)
   - Mobile navigation (if present)
   - Logo/brand links back to home

4. **Ensure correct relative paths** based on file depth:
   - Files at depth 1 use `../`
   - Files at depth 2 use `../../`
   - Files at depth 3 use `../../../`

5. **Create comprehensive Playwright test suite** to validate:
   - All header navigation links exist and are visible
   - All main navigation tabs work
   - All footer links are functional
   - Card-based navigation works (if applicable)
   - Actual navigation flows work (click and navigate)
   - No broken link patterns (undefined, null, empty hrefs)
   - Navigation consistency across all pages

6. **Test and verify**:
   - Run Playwright tests and ensure 100% pass rate
   - Fix any failures
   - Manually verify key navigation flows in browser

7. **Create documentation**:
   - Navigation map showing all interconnections
   - Summary of changes made
   - Test results

## Success Criteria

- [ ] ALL HTML files discovered and processed
- [ ] All navigation links use correct relative paths
- [ ] All tests passing (100%)
- [ ] No console errors during manual verification
- [ ] Complete documentation created

## Important Notes

- **Follow the workflow systematically** - don't skip phases
- **Batch similar files** for efficiency (group by depth)
- **Test early and often** - run tests after each major change
- **No special logic needed** - just standard navigation interconnection
- **Clean up temporary files** when done

Please follow the detailed workflow in `UI/NAVIGATION_FIX_WORKFLOW.md` and provide progress updates as you complete each phase.
```

---

## Variables to Replace:

- `[FOLDER_NAME]`: The target folder name (e.g., `UI/Seller`, `UI/Creator`, etc.)

---

## Example Usage:

**For Seller folder:**
```
Replace [FOLDER_NAME] with: UI/Seller
```

**For Creator folder:**
```
Replace [FOLDER_NAME] with: UI/Creator
```

**For Admin folder:**
```
Replace [FOLDER_NAME] with: UI/Admin
```

---

## What to Expect:

Claude will:
1. ✅ Scan all HTML files (no files missed)
2. ✅ Create folder structure analysis
3. ✅ Fix all navigation systematically
4. ✅ Create Playwright test suite
5. ✅ Run tests and fix failures
6. ✅ Provide complete documentation
7. ✅ Clean up temporary files

**Estimated Time**: 2.5-3.5 hours per folder

---

## Tips for Success:

1. **Use in a fresh thread** - Start clean for each folder
2. **Provide folder name clearly** - Replace [FOLDER_NAME] before sending
3. **Let Claude follow the workflow** - Don't interrupt the systematic process
4. **Review test results** - Ensure 100% pass rate before marking complete
5. **Keep documentation** - Save the summary for reference
