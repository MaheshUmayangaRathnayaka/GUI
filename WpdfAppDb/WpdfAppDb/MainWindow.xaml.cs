using System.Linq;
using System.Windows;

namespace WpdfAppDb
{
    public partial class MainWindow : Window
    {
        private ProductDbContext _db = new ProductDbContext();

        public MainWindow()
        {
            InitializeComponent();
            LoadData();
        }

        private void LoadData()
        {
            ProductGrid.ItemsSource = _db.Products.ToList();
        }

        private void Add_Product(object sender, RoutedEventArgs e)
        {
            if (ProductGrid.SelectedItem is Product selectedBook)
            {
                // Open dialog with selected book details for editing
                DialogBox dialog = new DialogBox(selectedBook);
                if (dialog.ShowDialog() == true)
                {
                    // Update existing book
                    selectedBook.VehicleType = dialog.vehicletype;
                    selectedBook.Model = dialog.model;
                    selectedBook.RentPerDay = dialog.rentperday;
                    selectedBook.Location = dialog.location;

                    _db.SaveChanges();
                    LoadData();
                }
            }
            else
            {
                // Open empty dialog for adding a new book
                DialogBox dialog = new DialogBox();
                if (dialog.ShowDialog() == true)
                {
                    Product newBook = new Product
                    {
                        VehicleType = dialog.vehicletype,
                        Model = dialog.model,
                        RentPerDay = dialog.rentperday,
                        Location = dialog.location
                    };

                    _db.Products.Add(newBook);
                    _db.SaveChanges();
                    LoadData();
                }
            }
        }

        private void Delete_Product(object sender, RoutedEventArgs e)
        {
            if (ProductGrid.SelectedItem is Product p)
            {
                _db.Products.Remove(p);
                _db.SaveChanges();
                LoadData();
            }
        }
    }
}
