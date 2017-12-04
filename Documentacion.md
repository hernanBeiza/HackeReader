## Members

<dl>
<dt><a href="#rutaDB">rutaDB</a> : <code>String</code></dt>
<dd><p>MongoDB local path</p>
</dd>
<dt><a href="#NoticiaSchema">NoticiaSchema</a></dt>
<dd><p>NoticiaSchema. Local Schema for each New</p>
</dd>
<dt><a href="#noticia">noticia</a> : <code>Object</code></dt>
<dd><p>Local new object. Only for reference.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#actualizar">actualizar(request, response)</a> ⇒ <code>response</code></dt>
<dd><p>Returns the news available in the RN API</p>
</dd>
<dt><a href="#actualizarInterno">actualizarInterno(request, response)</a> ⇒ <code>response</code></dt>
<dd><p>Returns the news available in the RN API, for background update</p>
</dd>
<dt><a href="#obtener">obtener(request, response)</a> ⇒ <code>response</code></dt>
<dd><p>Returns the news available in local mongo db</p>
</dd>
<dt><a href="#actualizar">actualizar(idnoticia:, response)</a> ⇒ <code>response</code></dt>
<dd><p>Update a news from the localdb</p>
</dd>
<dt><a href="#eliminar">eliminar(idnoticia:, response)</a> ⇒ <code>response</code></dt>
<dd><p>Delete a news from the localdb</p>
</dd>
<dt><a href="#actualizar">actualizar(callbackObtener)</a> ⇒ <code>Object</code></dt>
<dd><p>Get the collections from the HN api</p>
</dd>
<dt><a href="#obtener">obtener(callbackObtener)</a> ⇒ <code>Object</code></dt>
<dd><p>Get the locals collections</p>
</dd>
<dt><a href="#obtenerConID">obtenerConID(model)</a> ⇒ <code>Object</code></dt>
<dd><p>Get one collections by idnoticia</p>
</dd>
<dt><a href="#guardar">guardar(model)</a> ⇒ <code>Object</code></dt>
<dd><p>Save a collection in the local MongoDB</p>
</dd>
<dt><a href="#actualizar">actualizar(model)</a> ⇒ <code>Object</code></dt>
<dd><p>Update a collection by id and autor</p>
</dd>
<dt><a href="#eliminar">eliminar(idnoticia)</a> ⇒ <code>Object</code></dt>
<dd><p>Update a collection by id. Update the valid. 1 visible.</p>
</dd>
</dl>

<a name="rutaDB"></a>

## rutaDB : <code>String</code>
MongoDB local path

**Kind**: global variable  
<a name="NoticiaSchema"></a>

## NoticiaSchema
NoticiaSchema. Local Schema for each New

**Kind**: global variable  
<a name="noticia"></a>

## noticia : <code>Object</code>
Local new object. Only for reference.

**Kind**: global variable  
<a name="actualizar"></a>

## actualizar(request, response) ⇒ <code>response</code>
Returns the news available in the RN API

**Kind**: global function  
**Returns**: <code>response</code> - response in json format  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>request</code> | made it from the Jquery client |
| response | <code>response</code> |  |

<a name="actualizarInterno"></a>

## actualizarInterno(request, response) ⇒ <code>response</code>
Returns the news available in the RN API, for background update

**Kind**: global function  
**Returns**: <code>response</code> - response in json format  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>request</code> | made it from the Jquery client |
| response | <code>response</code> |  |

<a name="obtener"></a>

## obtener(request, response) ⇒ <code>response</code>
Returns the news available in local mongo db

**Kind**: global function  
**Returns**: <code>response</code> - response in json format  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>request</code> | made it from the Jquery client or express server |
| response | <code>response</code> |  |

<a name="actualizar"></a>

## actualizar(idnoticia:, response) ⇒ <code>response</code>
Update a news from the localdb

**Kind**: global function  
**Returns**: <code>response</code> - response in json format  

| Param | Type | Description |
| --- | --- | --- |
| idnoticia: | <code>request</code> | story_id from the collection. autor |
| response | <code>response</code> |  |

<a name="eliminar"></a>

## eliminar(idnoticia:, response) ⇒ <code>response</code>
Delete a news from the localdb

**Kind**: global function  
**Returns**: <code>response</code> - response in json format  

| Param | Type | Description |
| --- | --- | --- |
| idnoticia: | <code>request</code> | story_id from the collection |
| response | <code>response</code> |  |

<a name="actualizar"></a>

## actualizar(callbackObtener) ⇒ <code>Object</code>
Get the collections from the HN api

**Kind**: global function  
**Returns**: <code>Object</code> - {result:true|false,noticias:[],mensaje:string}  

| Param | Type |
| --- | --- |
| callbackObtener | <code>callback</code> | 

<a name="obtener"></a>

## obtener(callbackObtener) ⇒ <code>Object</code>
Get the locals collections

**Kind**: global function  
**Returns**: <code>Object</code> - {result:true|false,noticias:[],mensaje:string}  

| Param | Type |
| --- | --- |
| callbackObtener | <code>callback</code> | 

<a name="obtenerConID"></a>

## obtenerConID(model) ⇒ <code>Object</code>
Get one collections by idnoticia

**Kind**: global function  
**Returns**: <code>Object</code> - {result:true|false,noticia:Object,mensaje:string}  

| Param | Type |
| --- | --- |
| model | <code>callback</code> | 

<a name="guardar"></a>

## guardar(model) ⇒ <code>Object</code>
Save a collection in the local MongoDB

**Kind**: global function  
**Returns**: <code>Object</code> - {result:true|false,noticia:Object,mensaje:string}  

| Param | Type |
| --- | --- |
| model | <code>callback</code> | 

<a name="actualizar"></a>

## actualizar(model) ⇒ <code>Object</code>
Update a collection by id and autor

**Kind**: global function  
**Returns**: <code>Object</code> - {result:true|false,noticia:Object,mensaje:string}  

| Param | Type |
| --- | --- |
| model | <code>callback</code> | 

<a name="eliminar"></a>

## eliminar(idnoticia) ⇒ <code>Object</code>
Update a collection by id. Update the valid. 1 visible.

**Kind**: global function  
**Returns**: <code>Object</code> - {result:true|false,noticia:Object,mensaje:string}  

| Param | Type |
| --- | --- |
| idnoticia | <code>callback</code> | 

