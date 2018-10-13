using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Web.Api.Test.Controllers
{

    [RoutePrefix("api/Test")]
    public class TestController : ApiController
    {

        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        [Route("Data")]
        [HttpGet] // There are HttpGet, HttpPost, HttpPut, HttpDelete.
        public async Task<IHttpActionResult> Data()
        {
            var s = new string[] { "value1", "value2" };
            return Ok(s);
        }

    }
}
