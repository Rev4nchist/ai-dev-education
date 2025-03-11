# AI Dev Education Roadmap Files

This directory contains roadmap files for the AI Dev Education project in formats compatible with popular project management and mind mapping tools.

## Available Formats

### 1. roadmap.csv
- **Format**: Comma-Separated Values
- **Use Case**: Import into Gantt chart and project management software
- **Compatible Tools**:
  - GanttProject (`File` > `Import` > `Import CSV`)
  - ProjectLibre (`File` > `Import` > `Microsoft Project XML`)
  - Microsoft Project (`File` > `Open` and select the CSV)
  - Excel/Google Sheets (for viewing and light editing)

### 2. roadmap.md
- **Format**: Markdown with hierarchical structure
- **Use Case**: Import into mind mapping software
- **Compatible Tools**:
  - Freeplane (Copy content and paste as plain text in a new mind map)
  - XMind (Import as text with hierarchy)
  - MindMeister (Import as text with indentation or `-` bullets)
  - Any markdown editor for viewing

## Import Instructions

### For Gantt Chart Tools

#### GanttProject
1. Open GanttProject
2. Go to `File` > `Import` > `Import CSV`
3. Select the `roadmap.csv` file
4. In the mapping dialog:
   - Map "ID" to "ID"
   - Map "Task Name" to "Name"
   - Map "Start Date" to "Begin date"
   - Map "End Date" to "End date"
   - Map "Duration (Days)" to "Duration"
   - Map "Dependencies" to "Predecessors"
5. Click "OK" to import

#### Microsoft Project
1. Open Microsoft Project
2. Go to `File` > `Open`
3. Select the `roadmap.csv` file
4. Follow the import wizard, mapping columns as prompted
5. If asked, set the start date to match the project start date

### For Mind Mapping Tools

#### Freeplane
1. Open Freeplane
2. Create a new mind map
3. Create a central node with "AI Dev Education Project"
4. Open `roadmap.md` in a text editor
5. Copy the content (excluding the title)
6. In Freeplane, select the central node and use:
   - `Edit` > `Paste as` > `Plain text`

#### XMind
1. Open XMind
2. Create a new mind map
3. Select the central topic
4. Open `roadmap.md` in a text editor
5. Copy the content (excluding the title)
6. In XMind, use `Edit` > `Import` > `Plain Text with Hierarchy`

## Customizing the Roadmap

### Updating Dates

If you need to adjust the project timeline:
1. Edit the `roadmap.csv` file using a spreadsheet application
2. Update Start Date, End Date, and Duration columns
3. Ensure dependencies remain valid
4. Save as CSV, maintaining the header row

### Adding New Tasks

To add new tasks to the roadmap:
1. For CSV format:
   - Add a new row with appropriate ID (match the hierarchy level)
   - Ensure dependencies are correctly specified
   - Enter durations and dates

2. For Markdown format:
   - Add new items maintaining the hierarchical structure with proper indentation
   - Use the same bullet point style (`-`)

## Maintaining Sync with Project Status

When updating task status:
1. Update both roadmap files to reflect changes
2. Ensure the `Project_Status.md` file is synchronized with roadmap changes
3. Update status and completion percentage in the CSV file as work progresses 