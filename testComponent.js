app.component("test-component", {

    template:
        /*html*/`
        <div>
       {{ info }}
        </div>
        `,

    data: function () {
        return {
          info: null
        }
      },
      mounted: function () {
        axios
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => (this.info = response))
        //   .then(function(response){
        //       this.info = response
        //   })
      }


})