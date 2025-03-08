using System.Windows;

namespace WpdfAppDb
{
    public partial class DialogBox : Window
    {
        public string vehicletype { get; private set; }
        public string model { get; private set; }
        public int rentperday { get; private set; }
        public string location { get; private set; }

        public DialogBox(Product existing = null)
        {
            InitializeComponent();

            if (existing != null)
            {
                txtName.Text = existing.VehicleType;
                txtField2.Text = existing.Model;
                txtQuantity.Text = existing.RentPerDay.ToString();
                txtLocation.Text = existing.Location;
            }
        }

        private void OK_Click(object sender, RoutedEventArgs e)
        {
            if (!string.IsNullOrWhiteSpace(txtName.Text) &&
                !string.IsNullOrWhiteSpace(txtField2.Text) &&
                int.TryParse(txtQuantity.Text, out int quantity))
            {
                vehicletype = txtName.Text;
                model = txtField2.Text;
                rentperday = quantity;
                location = txtLocation.Text;
                DialogResult = true;
            }
            else
            {
                MessageBox.Show("Please enter valid details.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void Cancel_Click(object sender, RoutedEventArgs e)
        {
            DialogResult = false;
        }
    }
}
