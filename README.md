
## Thought process ➖
- After reading the problem, I felt it was similar to ToDo project where user can add new items and edit the item.
- The challenging thing I felt was how to implement nested rows if the type is “Object” and how to edit or delete this subrows.
- Then I googled, and thought for a while and went forward with 2D list kind of 
- The next challenge I found, how to iterate on list since each item would have different structure one may have subrows while one not and also that case when there are nested multiple rows,
- Also, I spent time on thinking if I had to edit or delete a item if it is subtask then how do I search in 2D list. Then came up with Recursion solution
- If I delete a item then its sublist should also be deleted,so that was the edge case I find while implementing it.
