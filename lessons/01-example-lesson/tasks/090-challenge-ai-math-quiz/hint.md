# Hints

## Field Names in Expressions

The field names in the User Prompt must match exactly what the Form Trigger outputs.

## Testing Tips

Try these combinations to verify your workflow behaves correctly:

| Q1 (10+10) | Q2 (100+100) | Q3 (22×22) | Expected Score |
|------------|--------------|------------|---------------|
| 20         | 200          | 484        | 3/3 ✅         |
| 20         | 200          | 400        | 2/3           |
| 5          | 5            | 5          | 0/3           |
