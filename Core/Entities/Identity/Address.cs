using System.ComponentModel.DataAnnotations;

namespace Core.Entities.Identity
{
    public class Address
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }

        [Required]
        public string AppUserId { get; set; }  //this will cause asp.net to link this foreign key properly to the AppUser table
        public AppUser AppUser { get; set; } //this will cause asp.net to link this foreign key properly to the AppUser table
    }
}