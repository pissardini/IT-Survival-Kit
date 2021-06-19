# .htaccess Cheatsheet 

## Redirect 

### Single page

``` 
Redirect 301 /page.html http://www.domain.com/newpage.html
Redirect 301 /page.html http://www.example.com/folder/
``` 

### Subfolder
#### Redirect subdirectory to another site

``` 
Redirect 301 /subfolder http://www.domain.com/
Redirect 301 /page.html http://www.domain.com/newpage.html
Redirect 301 /page.html http://www.domain.com/folder/
``` 

### Entire site 

```
Redirect 301 / http://www.domain.com/
Redirect 301 / http://www.domain.com/subfolder/
```

