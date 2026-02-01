# Debugging - Analyzing Failed Executions

## What is Debugging in N8N?

Debugging in N8N means analyzing failed workflow executions and understanding why they failed. N8N provides powerful tools to inspect every step of a workflow.

## Why Debugging is Important

- **Identify Error Causes** - Understand what went wrong
- **Optimize Workflows** - Recognize performance issues
- **Understand Data Flow** - See how data flows through the workflow
- **Quick Problem Solving** - Efficiently implement fixes

## Task

Use N8N's debugging features to analyze and fix failed executions.

### Step-by-Step Guide

1. **Find Failed Execution**
   - Go to "Executions" in the sidebar
   - Filter by "Error" status
   - Select a failed execution

2. **Analyze Execution**
   - Open the failed execution
   - Identify the node that failed (marked in red)
   - Click on the failed node
   - Read the error message in the "Error" tab

3. **Inspect Data Flow**
   - Look at the input data of the failed node
   - Check the output data of the previous node
   - Identify discrepancies or missing data

4. **Retry Execution (Rerun)**
   - Click "Retry Execution" in the top right
   - Option 1: "Retry from Failed Node" - Starts from the failed node
   - Option 2: "Retry from Start" - Restarts the entire workflow
   - Choose the appropriate option

5. **Fix Problem**
   - Go back to the workflow editor
   - Correct the identified problem
   - Possible fixes:
     - Correct expressions
     - Add missing credentials
     - Adjust node configuration
     - Add error handling

6. **Test Workflow Again**
   - Execute the workflow again
   - Check if the error is fixed
   - Validate the output data

## Debugging Best Practices

- **Step-by-Step Execution**: Use the "Execute Node" button to test individual nodes
- **Console Output**: Use Code Nodes with `console.log()` for detailed logging
- **Execution History**: Compare successful and failed executions
- **Data Preview**: Always look at the data structure in each node

## Learning Objectives

✓ Navigate and filter the executions list
✓ Interpret error messages
✓ Analyze data flow in workflows
✓ Understand different rerun options
✓ Perform systematic debugging
