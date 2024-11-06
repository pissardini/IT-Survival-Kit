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

## Create Dataframe 

* From dictionary:
```
import pandas as pd

data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [24, 27, 22],
    'City': ['New York', 'Los Angeles', 'Chicago']
}

df = pd.DataFrame(data)
print(df)
```

* From list:
```
names = ['Alice', 'Bob', 'Charlie']
ages = [24, 27, 22]
cities = ['New York', 'Los Angeles', 'Chicago']

df = pd.DataFrame({
    'Name': names,
    'Age': ages,
    'City': cities
})
print(df)
```

* Empty: 
```
df = pd.DataFrame(columns=['Name', 'Age', 'City'])
print(df)
```

## Columns 

### Renaming 

* Rename specific columns:

```
import pandas as pd

df = pd.DataFrame({
    'old_name1': [1, 2, 3],
    'old_name2': [4, 5, 6]
})
```

* Rename columns

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

### Select Columns

* By Name:
 
```
import pandas as pd

df = pd.DataFrame({
    'col1': [1, 2, 3],
    'col2': [4, 5, 6],
    'col3': [7, 8, 9]
})
```

* Select specific columns
  
```  
df_selected = df[['col1', 'col3']]
print(df_selected)
```

* Select column by index:
```
df_selected = df.iloc[:, [0, 2]]
print(df_selected)
```

* Selecting Columns by a Condition:
```
df_selected = df.filter(like='col')
print(df_selected)
```

* Selecting Columns Based on Data Type:

```
df_numeric = df.select_dtypes(include='number')
print(df_numeric)
```

## Rows

### Inserting new row
* Using .loc:

```
import pandas as pd

df = pd.DataFrame({
    'Name': ['Alice', 'Bob'],
    'Age': [24, 27],
    'City': ['New York', 'Los Angeles']
})

df.loc[2] = ['Charlie', 22, 'Chicago']
print(df)
```

* Using .append:
```
new_row = {'Name': 'David', 'Age': 30, 'City': 'San Francisco'}
df = df.append(new_row, ignore_index=True)
print(df)
```

* Using pd.concat:

```
new_row = pd.DataFrame([{'Name': 'Eve', 'Age': 25, 'City': 'Houston'}])
df = pd.concat([df, new_row], ignore_index=True)
print(df)
```
  
