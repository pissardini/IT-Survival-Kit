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

# Rename columns
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
 
