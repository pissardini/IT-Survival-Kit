# Pandas 

* **Package installation**:
```
!pip install pandas
```

## Data importing

* Excel:

```
import pandas as pd

pd.read_excel('tmp.xlsx', index_col=0)  
```

## Basic information

* Column names (variables):
```
import pandas as pd

dataframe_nome.columns
```

* Detailed information about variables:
```
import pandas as pd

dataframe_nome.info()
```
  
* Only the first "n" observations + variable names:

```
import pandas as pd

dataframe_nome.head(10)
```

* Only the last "n" observations + variable names:

```
import pandas as pd

dataframe_nome.tail(10)
```

* Rename specific columns:

```
import pandas as pd

# Example DataFrame
df = pd.DataFrame({
    'old_name1': [1, 2, 3],
    'old_name2': [4, 5, 6]
})

## Rename columns

```
df = df.rename(columns={'old_name1': 'new_name1', 'old_name2': 'new_name2'})

print(df)
```

* Rename all columns at once:

```
df.columns = ['new_name1', 'new_name2']
print(df)
```

* Rename columns in-place:

```
df.rename(columns={'old_name1': 'new_name1'}, inplace=True)
print(df)
``` 

## Select Columns

* By Name:
 
```
import pandas as pd

# Example DataFrame
df = pd.DataFrame({
    'col1': [1, 2, 3],
    'col2': [4, 5, 6],
    'col3': [7, 8, 9]
})

* Select specific columns
df_selected = df[['col1', 'col3']]
print(df_selected)
```

* Select column by index:
```
# Select columns by index (e.g., first and third columns)
df_selected = df.iloc[:, [0, 2]]
print(df_selected)
```

* Selecting Columns by a Condition:
```
# Select columns that contain "col" in their names
df_selected = df.filter(like='col')
print(df_selected)
```

* Selecting Columns Based on Data Type:

```
# Select only numeric columns
df_numeric = df.select_dtypes(include='number')
print(df_numeric)
```
