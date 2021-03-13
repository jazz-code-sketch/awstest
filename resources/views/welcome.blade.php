<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"> 
<!--   <meta name="csrf-param" content="authenticity_token" />
  <meta name="csrf-token" content="{{ csrf_token() }}" /> -->
  <meta name="csrf-token" content="{!! csrf_token() !!}" />

  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <div id="app">
      <App></App>
  </div>


<!-- <script type="text/javascript">
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
                }
            });
</script> -->


  <script src="{{ asset('js/app.js') }}"></script>





</body>
</html>
