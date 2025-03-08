using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpdfAppDb
{
    public class Product
    {
        public int Id { get; set; } //Word "Id" or "ProductId" will be used as primary key in entity framework
        public string VehicleType { get; set; }
        public string Model { get; set; }
        public int RentPerDay { get; set; }
        public string Location { get; set; }
    }
}
