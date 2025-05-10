import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface OrderItem {
  productName: string;
  quantity: number;
  price: number;
}


declare module "jspdf" {
  interface jsPDF {
    lastAutoTable: {
      finalY: number;
    };
  }
}




export  const generateInvoicePDF = (
  orderId: string,
  customerName: string,
  email: string,
  address: string,
  phone: string,
  pincode: string,
  items: OrderItem[],
  totalAmount: number
) => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Invoice", 14, 22);

  doc.setFontSize(12);
  doc.text(`Order ID: ${orderId}`, 14, 32);
  doc.text(`Customer: ${customerName}`, 14, 40);
  doc.text(`Email: ${email}`, 14, 46);
  doc.text(`Phone: ${phone}`, 14, 52);
  doc.text(`Address: ${address}, Pincode: ${pincode}`, 14, 58);

  autoTable(doc, {
    startY: 70,
    head: [["Product Name", "Quantity", "Price", "Total"]],
    body: items.map((item) => [
      item.productName,
      item.quantity,
      `₹${item.price}`,
      `₹${item.price * item.quantity}`,
    ]),
  });

  doc.text(`Total Amount: ₹${totalAmount}`, 14, doc.lastAutoTable.finalY + 10);

  doc.save(`invoice-${orderId}.pdf`);
};
