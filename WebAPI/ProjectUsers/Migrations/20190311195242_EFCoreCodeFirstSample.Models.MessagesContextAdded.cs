using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectUsers.Migrations
{
    public partial class EFCoreCodeFirstSampleModelsMessagesContextAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Users",
                newName: "UserName");

            migrationBuilder.CreateTable(
                name: "Messages",
                columns: table => new
                {
                    MessageId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    MessageBody = table.Column<string>(nullable: true),
                    SenderName = table.Column<string>(nullable: true),
                    RecipientName = table.Column<string>(nullable: true),
                    CreationDate = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Messages", x => x.MessageId);
                });

            migrationBuilder.InsertData(
                table: "Messages",
                columns: new[] { "MessageId", "CreationDate", "MessageBody", "RecipientName", "SenderName" },
                values: new object[,]
                {
                    { 1L, "11/03/19", "Hello from the other side", "Adnan Kardas", "Selma Kardas" },
                    { 2L, "11/03/19", "Hello from the other side", "Selma Kardas", "Adnan Kardas" }
                });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1L,
                column: "UserName",
                value: "Selma Kardas");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 2L,
                column: "UserName",
                value: "Adnan Kardas");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Messages");

            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "Users",
                newName: "LastName");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Users",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1L,
                columns: new[] { "FirstName", "LastName" },
                values: new object[] { "Selma", "Kardas" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 2L,
                columns: new[] { "FirstName", "LastName" },
                values: new object[] { "Adnan", "Kardas" });
        }
    }
}
